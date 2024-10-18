import { BaseAPI } from "./BaseApi";
// Product API class
class ProductService extends BaseAPI {
    async searchProducts(queryParams) {
        return this.handleResponse(() => this.client.GET("/products", { params: { query: queryParams } }));
    }
    /* @deprecated in favor of searchProducts */
    async listProducts(queryParams) {
        return this.handleResponse(() => this.client.GET("/products", { params: { query: queryParams } }));
    }
    async getProduct(productId) {
        return this.handleResponse(() => this.client.GET("/products/{productId}", {
            params: { path: { productId } },
        }));
    }
    async patchProduct(productId, body) {
        return this.handleResponse(() => this.client.PATCH("/products/{productId}", {
            params: { path: { productId } },
            body: {
                content: body,
            },
        }));
    }
}
export default ProductService;
//# sourceMappingURL=ProductService.js.map