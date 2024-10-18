import { paths } from "../schema";
export type searchProducts = paths["/products"]["get"]["responses"]["200"]["content"]["application/json"];
export type searchProductsQueryParams = paths["/products"]["get"]["parameters"]["query"];
export type listProducts = paths["/products"]["get"]["responses"]["200"]["content"]["application/json"];
export type listProductsQueryParams = paths["/products"]["get"]["parameters"]["query"];
export type patchProductRequestBody = paths["/products/{productId}"]["patch"]["requestBody"]["content"]["application/json"]["content"];
//# sourceMappingURL=product.d.ts.map