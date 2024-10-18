import { components, paths } from "../schema";

export type ProductsResponse =
  paths["/products"]["get"]["responses"]["200"]["content"]["application/json"];

export type ProductContent = components["schemas"]["Products"]["content"];

export type ProductQueryParams =
  paths["/products"]["get"]["parameters"]["query"];
