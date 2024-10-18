import { components, paths } from "../schema";
export type Customer = paths["/customers"]["get"]["responses"]["200"]["content"]["application/json"];
export type CustomerUpdateBody = paths["/customers"]["post"]["requestBody"]["content"]["application/json"]["content"];
export type CustomerContent = components["schemas"]["Customer"];
//# sourceMappingURL=customer.d.ts.map