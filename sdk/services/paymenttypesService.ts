import { BaseAPI } from "./BaseApi";
import type {
  GetPaymentTypesResponse,
  CreatePaymentTypeRequest,
  CreatePaymentTypeResponse,
  GetPaymentTypeQueryParams,
  GetPaymentTypeResponse,
  UpdatePaymentTypeQueryParams,
  UpdatePaymentTypeRequest,
  UpdatePaymentTypeResponse,
  DeletePaymentTypeResponse,
} from "../types/paymenttypes";

/**
 * Service class for interacting with the Payment Types endpoints of the CustomerFirst API.
 */
class PaymentTypesService extends BaseAPI {
  /**
   * Get a list of all the store's payment types.
   */
  async getPaymentTypes(): Promise<GetPaymentTypesResponse> {
    return this.handleResponse(() => {
      return this.client.GET("/paymenttypes");
    });
  }

  /**
   * Create a payment type.
   * @param paymentTypeData - The data for the payment type to create.
   */
  async createPaymentType(
    paymentTypeData: CreatePaymentTypeRequest,
  ): Promise<CreatePaymentTypeResponse> {
    return this.handleResponse(() => {
      return this.client.POST("/paymenttypes", {
        body: paymentTypeData,
      });
    });
  }

  /**
   * Get a specific payment type by ID.
   * @param id - The ID of the payment type.
   * @param queryParams - Optional query parameters.
   */
  async getPaymentType(
    id: number,
    queryParams?: GetPaymentTypeQueryParams,
  ): Promise<GetPaymentTypeResponse> {
    return this.handleResponse(() => {
      return this.client.GET("/paymenttypes/{id}", {
        params: { path: { id }, query: queryParams },
      });
    });
  }

  /**
   * Edit an existing payment type.
   * @param id - The ID of the payment type to update.
   * @param paymentTypeData - The updated data for the payment type.
   * @param queryParams - Optional query parameters.
   */
  async updatePaymentType(
    id: number,
    paymentTypeData: UpdatePaymentTypeRequest,
    queryParams?: UpdatePaymentTypeQueryParams,
  ): Promise<UpdatePaymentTypeResponse> {
    return this.handleResponse(() => {
      return this.client.PUT("/paymenttypes/{id}", {
        params: { path: { id }, query: queryParams },
        body: paymentTypeData,
      });
    });
  }

  /**
   * Delete a payment type.
   * @param id - The ID of the payment type to delete.
   */
  async deletePaymentType(id: number): Promise<DeletePaymentTypeResponse> {
    return this.handleResponse(() => {
      return this.client.DELETE("/paymenttypes/{id}", {
        params: { path: { id } },
      });
    });
  }
}

export default PaymentTypesService;
