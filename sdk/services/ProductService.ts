import {
  listProducts,
  listProductsQueryParams,
  patchProductRequestBody,
  searchProducts,
} from "../types/product";
import { BaseAPI } from "./BaseApi";

// Product API class
class ProductService extends BaseAPI {
  async searchProducts(
    queryParams?: listProductsQueryParams,
  ): Promise<searchProducts> {
    return this.handleResponse(() =>
      this.client.GET("/products", { params: { query: queryParams } }),
    );
  }

  /* @deprecated in favor of searchProducts */
  async listProducts(
    queryParams?: listProductsQueryParams,
  ): Promise<listProducts> {
    return this.handleResponse(() =>
      this.client.GET("/products", { params: { query: queryParams } }),
    );
  }

  async getProduct(productId: number) {
    return this.handleResponse(() =>
      this.client.GET("/products/{productId}", {
        params: { path: { productId } },
      }),
    );
  }

  async patchProduct(productId: number, body: patchProductRequestBody) {
    return this.handleResponse(() =>
      this.client.PATCH("/products/{productId}", {
        params: { path: { productId } },
        body: {
          content: body,
        },
      }),
    );
  }
}

export default ProductService;
