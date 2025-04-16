import { BaseAPI } from "./BaseApi";
import {
  AddArticlesResponse,
  AddPaymentResponse,
  DiscountAllArticlesRequestBody,
  DiscountArticleItemRequestBody,
  PaymentArticleRequestBody,
  POSPaymentRequestBody, // For addPayment
  PutPOSPaymentRequestBody, // For putPOSPayment
  POSPaymentResponse,
  PutPOSPaymentResponse,
  SearchPOSPaymentResponse,
  SearchPosPaymentsQueryParams,
  UpdatePaymentArticleRequestBody,
  UpdatePaymentArticleResponse,
} from "../types/posPayment";

class POSPaymentsService extends BaseAPI {
  /**
   * Search for payments
   * @param queryParams - Optional query parameters for searching payments
   */
  async searchPosPayments(
    queryParams?: SearchPosPaymentsQueryParams,
  ): Promise<SearchPOSPaymentResponse> {
    return this.handleResponse(() => {
      return this.client.GET("/pospayments", { params: { query: queryParams } });
    });
  }

  /**
   * Add a new POS payment
   * @param paymentData - The payment data to create
   */
  async addPayment(
    paymentData: POSPaymentRequestBody,
  ): Promise<AddPaymentResponse> {
    return this.handleResponse(() => {
      // Pass paymentData directly as the body
      return this.client.POST("/pospayments", {
        body: paymentData,
      });
    });
  }

  /**
   * Get a payment by ID
   * @param paymentId - The ID of the payment to retrieve
   */
  async getPOSPayment(paymentId: number): Promise<POSPaymentResponse> {
    return this.handleResponse(() => {
      return this.client.GET("/pospayments/{paymentId}", {
        params: { path: { paymentId } },
      });
    });
  }

  /**
   * Update a payment
   * @param paymentId - The ID of the payment to update
   * @param paymentData - The payment data to update (wrapped in content)
   */
  async putPOSPayment(
    paymentId: number,
    paymentData: PutPOSPaymentRequestBody, // Use the specific type for PUT
  ): Promise<PutPOSPaymentResponse> {
    return this.handleResponse(() => {
      // Pass paymentData directly as the body, as its type now includes the 'content' wrapper
      return this.client.PUT("/pospayments/{paymentId}", {
        params: { path: { paymentId } },
        body: paymentData,
      });
    });
  }

  /**
   * Add articles to an existing payment
   * @param paymentId - The ID of the payment
   * @param articlesData - An array of articles to add
   */
  async addArticles(
    paymentId: number,
    articlesData: PaymentArticleRequestBody,
  ): Promise<AddArticlesResponse> {
    return this.handleResponse(() => {
      // Pass articlesData directly as the body (it's already an array)
      return this.client.POST("/pospayments/{paymentId}/articles", {
        params: { path: { paymentId } },
        body: articlesData,
      });
    });
  }

  /**
   * Update a specific article within a payment
   * @param paymentId - The ID of the payment
   * @param paymentArticleId - The ID of the article to update
   * @param articleData - The updated article data
   */
  async updatePaymentArticle(
    paymentId: number,
    paymentArticleId: number,
    articleData: UpdatePaymentArticleRequestBody,
  ): Promise<UpdatePaymentArticleResponse> {
    return this.handleResponse(() => {
      // Pass articleData directly as the body
      return this.client.PUT("/pospayments/{paymentId}/articles/{paymentArticleId}", {
        params: { path: { paymentId, paymentArticleId } },
        body: articleData,
      });
    });
  }

  /**
   * Delete a specific article within a payment
   * @param paymentId - The ID of the payment
   * @param paymentArticleId - The ID of the article to delete
   */
  async deletePaymentArticle(
    paymentId: number,
    paymentArticleId: number,
  ): Promise<void> {
    // The DELETE endpoint returns 204 No Content on success
    await this.handleResponse(() => {
      return this.client.DELETE(
        "/pospayments/{paymentId}/articles/{paymentArticleId}",
        {
          params: { path: { paymentId, paymentArticleId } },
        },
      );
    });
  }

  /**
   * Add a discount to a specific article within a payment
   * @param paymentId - The ID of the payment
   * @param paymentArticleId - The ID of the article to apply the discount to
   * @param discountData - The discount details
   */
  async addDiscountToArticle(
    paymentId: number,
    paymentArticleId: number,
    discountData: DiscountArticleItemRequestBody,
  ): Promise<void> {
    // This POST endpoint returns 204 No Content on success
    await this.handleResponse(() => {
      return this.client.POST(
        "/pospayments/{paymentId}/articles/{paymentArticleId}/discount",
        {
          params: { path: { paymentId, paymentArticleId } },
          body: discountData, // Pass discountData directly
        },
      );
    });
  }

  /**
   * Add a discount to all applicable articles within a payment
   * @param paymentId - The ID of the payment
   * @param discountData - The discount details
   */
  async addDiscountToAllArticles(
    paymentId: number,
    discountData: DiscountAllArticlesRequestBody, // Use specific type if needed, or reuse DiscountArticleItemRequestBody
  ): Promise<void> {
    // This POST endpoint returns 204 No Content on success
    await this.handleResponse(() => {
      return this.client.POST("/pospayments/{paymentId}/articles/discount", {
        params: { path: { paymentId } },
        body: discountData, // Pass discountData directly
      });
    });
  }
}

export default POSPaymentsService;
