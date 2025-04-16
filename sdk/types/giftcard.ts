import { components, operations, paths } from "../schema";

// Query Params
export type searchGiftcardQueryParams =
  paths["/giftcards"]["get"]["parameters"]["query"];

// Response Types
export type SearchGiftcardsResponse =
  operations["searchGiftcard"]["responses"]["200"]["content"]["application/json"];
export type PostGiftcardsResponse =
  operations["createGiftcard"]["responses"]["200"]["content"]["application/json"];
export type GetGiftcardResponse =
  operations["getGiftcard"]["responses"]["200"]["content"]["application/json"];
export type PutGiftcardsResponse =
  paths["/giftcards/{giftcardId}"]["put"]["responses"]["200"]["content"]["application/json"];
export type GetGiftCardTransactionsResponse =
  paths["/giftcards/{giftcardid}/transactions"]["get"]["responses"]["200"]["content"]["application/json"];

// Request Body Types
export type PostGiftcardsRequest = components["schemas"]["PostGiftcardsRequest"];
export type PutGiftcardRequest = components["schemas"]["PutGiftcardRequest"];

// Content Types
export type GiftcardContent = components["schemas"]["Giftcard"];
export type GiftCardTransactionContent =
  components["schemas"]["GiftCardTransaction"];
