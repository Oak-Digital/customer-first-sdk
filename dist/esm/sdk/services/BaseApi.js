import createClient from "openapi-fetch";
// Base API class
export class BaseAPI {
    client;
    constructor(apiKey, baseUrl = "https://app.deltateq.com/api") {
        if (!apiKey) {
            throw new Error("Customer First API key is missing");
        }
        this.client = createClient({
            baseUrl: baseUrl,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
        });
    }
    async handleResponse(apiCall) {
        const { data, error } = await apiCall();
        if (error) {
            throw new Error(`API Error: ${JSON.stringify(error)}`);
        }
        if (!data) {
            throw new Error("No data returned from API");
        }
        return data;
    }
    async customEndpoint(options) {
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
        return this.handleResponse(apiCall);
    }
}
//# sourceMappingURL=BaseApi.js.map