import { BaseAPI } from "./BaseApi";
import {
  GetGiftcardResponse,
  GetGiftCardTransactionsResponse,
  PostGiftcardsRequest,
  PostGiftcardsResponse,
  PutGiftcardRequest,
  PutGiftcardsResponse,
  searchGiftcardQueryParams,
  SearchGiftcardsResponse,
} from "../types";

class GiftcardService extends BaseAPI {
  /**
   * Search for giftcards
   * @param queryParams - Optional query parameters for searching giftcards
   */
  async searchGiftcards(
    queryParams?: searchGiftcardQueryParams,
  ): Promise<SearchGiftcardsResponse> {
    return this.handleResponse(() => {
      return this.client.GET("/giftcards", { params: { query: queryParams } });
    });
  }

  /**
   * Create a giftcard
   * @param giftcardData - The data for the giftcard to create
   */
  async createGiftcard(
    giftcardData: PostGiftcardsRequest,
  ): Promise<PostGiftcardsResponse> {
    return this.handleResponse(() => {
      return this.client.POST("/giftcards", {
        body: giftcardData,
      });
    });
  }

  /**
   * Get a specific giftcard by ID
   * @param giftcardId - The ID of the giftcard to retrieve
   */
  async getGiftcard(giftcardId: number): Promise<GetGiftcardResponse> {
    return this.handleResponse(() => {
      return this.client.GET("/giftcards/{giftcardId}", {
        params: { path: { giftcardId } },
      });
    });
  }

  /**
   * Update a specific giftcard by ID
   * @param giftcardId - The ID of the giftcard to update
   * @param giftcardData - The data to update the giftcard with
   */
  async updateGiftcard(
    giftcardId: number,
    giftcardData: PutGiftcardRequest,
  ): Promise<PutGiftcardsResponse> {
    return this.handleResponse(() => {
      return this.client.PUT("/giftcards/{giftcardId}", {
        params: { path: { giftcardId } },
        body: giftcardData,
      });
    });
  }

  /**
   * Get all transactions for a given giftcard
   * @param giftcardid - The ID of the giftcard
   */
  async getGiftcardTransactions(
    giftcardid: number,
  ): Promise<GetGiftCardTransactionsResponse> {
    return this.handleResponse(() => {
      return this.client.GET("/giftcards/{giftcardid}/transactions", {
        params: { path: { giftcardid } },
      });
    });
  }
}

export default GiftcardService;
