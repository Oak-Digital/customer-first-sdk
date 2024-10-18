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
export declare class BaseAPI {
    protected client: ReturnType<typeof createClient<paths>>;
    constructor(apiKey: string, baseUrl?: string);
    protected handleResponse<T>(apiCall: () => Promise<{
        data?: T;
        error?: unknown;
    }>): Promise<T>;
    customEndpoint<T = unknown, M extends HttpMethod = HttpMethod>(options: CustomEndpointOptions<M>): Promise<T>;
}
export {};
//# sourceMappingURL=BaseApi.d.ts.map