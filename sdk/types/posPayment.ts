import { components, operations, paths } from "../schema";

// Request query parameters
export type SearchPosPaymentsQueryParams =
  operations["searchPosPayments"]["parameters"]["query"];

// Request body types
export type POSPaymentRequestBody = components["schemas"]["POSPayment"]; // Used for POST /pospayments
export type PutPOSPaymentRequestBody = components["schemas"]["POSPaymentRequest"]; // Used for PUT /pospayments/{paymentId}
export type PaymentArticleRequestBody = components["schemas"]["PaymentArticle"][]; // addArticles expects an array
export type UpdatePaymentArticleRequestBody =
  components["schemas"]["PaymentArticleRequest"]; // PUT article expects PaymentArticleRequest schema
export type DiscountArticleItemRequestBody =
  components["schemas"]["DiscountArticleItem"];
// Type for adding discount to all articles (same schema, different path)
export type DiscountAllArticlesRequestBody =
  components["schemas"]["DiscountArticleItem"];

// Response types
export type SearchPOSPaymentResponse =
  operations["searchPosPayments"]["responses"]["200"]["content"]["application/json"];
export type POSPaymentResponse =
  operations["getPOSPayment"]["responses"]["200"]["content"]["application/json"];
export type AddPaymentResponse =
  operations["addPayment"]["responses"]["200"]["content"]["application/json"];
export type PutPOSPaymentResponse =
  operations["putPOSPayment"]["responses"]["200"]["content"]["application/json"];
export type AddArticlesResponse =
  operations["addArticles"]["responses"]["200"]["content"]["application/json"];
export type UpdatePaymentArticleResponse =
  paths["/pospayments/{paymentId}/articles/{paymentArticleId}"]["put"]["responses"]["200"]["content"]["application/json"];

// Component Schema Types
export type POSPayment = components["schemas"]["POSPayment"];
export type PaymentArticle = components["schemas"]["PaymentArticle"];
export type DiscountArticleItem = components["schemas"]["DiscountArticleItem"];
export type PaymentStatus = components["schemas"]["PaymentStatus"];
export type PaymentTypeRelation = components["schemas"]["PaymentTypeRelation"];
