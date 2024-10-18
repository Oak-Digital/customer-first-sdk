export declare enum TicketStatus {
    New = "new",
    Ready = "ready",
    Done = "done",
    Awaiting = "awaiting",
    Quote = "quote",
    Draft = "draft"
}
export declare enum TicketType {
    Repair = "repair",
    Sale = "sale"
}
export declare enum PartnerPermissionAccess {
    None = "none",
    ReadOnly = "readonly",
    Full = "full"
}
export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
export type CustomEndpointOptions<T extends HttpMethod> = {
    method: T;
    path: string;
    params?: {
        query?: Record<string, unknown>;
        path?: Record<string, unknown>;
    };
    body?: T extends "GET" | "DELETE" ? never : unknown;
};
//# sourceMappingURL=common.d.ts.map