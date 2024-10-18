import createClient from "openapi-fetch";
import type { paths } from "../schema";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

type CustomEndpointOptions<T extends HttpMethod> = {
  method: T;
  path: any;
  params?: {
    query?: Record<string, unknown>;
    path?: Record<string, unknown>;
  };
  body?: T extends "GET" | "DELETE" ? never : unknown;
};

// Base API class
export class BaseAPI {
  protected client: ReturnType<typeof createClient<paths>>;

  constructor(
    apiKey: string,
    baseUrl: string = "https://app.deltateq.com/api",
  ) {
    if (!apiKey) {
      throw new Error("Customer First API key is missing");
    }

    this.client = createClient<paths>({
      baseUrl: baseUrl,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });
  }

  protected async handleResponse<T>(
    apiCall: () => Promise<{ data?: T; error?: unknown }>,
  ): Promise<T> {
    const { data, error } = await apiCall();
    if (error) {
      throw new Error(`API Error: ${JSON.stringify(error)}`);
    }
    if (!data) {
      throw new Error("No data returned from API");
    }
    return data;
  }

  async customEndpoint<T = unknown, M extends HttpMethod = HttpMethod>(
    options: CustomEndpointOptions<M>,
  ): Promise<T> {
    const { method, path, params, body } = options;

    const apiCall = () => {
      switch (method) {
        case "GET":
          return this.client.GET(path, { params });
        case "POST":
          return this.client.POST(path, { params, body });
        case "PUT":
          return this.client.PUT(path, { params, body });
        case "DELETE":
          return this.client.DELETE(path, { params });
        case "PATCH":
          return this.client.PATCH(path, { params, body });
        default:
          throw new Error(`Unsupported HTTP method: ${method}`);
      }
    };

    return this.handleResponse<T>(apiCall);
  }
}
