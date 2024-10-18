import { BaseAPI } from "./BaseApi";
class CustomerService extends BaseAPI {
    // Function to search for a customer by email
    async searchCustomerByEmail(email) {
        return this.handleResponse(() => this.client.GET("/customers", {
            params: {
                query: { email: email },
            },
        }));
    }
    // Function to create a new customer
    async createCustomer(customerData) {
        return this.handleResponse(() => this.client.POST("/customers", {
            body: {
                content: {
                    ...customerData,
                },
            },
        }));
    }
    // Function to replace an existing customer by ID
    async replaceCustomer(customerId, customerData) {
        return this.handleResponse(() => this.client.PUT("/customers/{customerId}", {
            params: { path: { customerId } },
            body: {
                content: customerData,
                synctoeconomic: false, // Add this if you don't want to sync to e-conomic
            },
        }));
    }
    // Function to get or create a customer
    async getOrCreateCustomer(customerData) {
        if (!customerData?.email) {
            throw new Error("Email is required to get or create a customer");
        }
        try {
            // First, try to find the customer by email
            const existingCustomer = await this.searchCustomerByEmail(customerData?.email);
            if (existingCustomer.content && existingCustomer?.content?.length > 0) {
                return existingCustomer.content[0];
            }
            const newCustomer = await this.createCustomer(customerData);
            return newCustomer.content;
        }
        catch (error) {
            console.error("Error in getOrCreateCustomer:", error);
            throw error;
        }
    }
    // Function to create or replace a customer
    async createOrReplace(customerData) {
        if (!customerData?.email) {
            throw new Error("Email is required to get or create a customer");
        }
        try {
            const existingCustomerList = await this.searchCustomerByEmail(customerData?.email);
            const customer = existingCustomerList.content?.find((customer) => customer.email === customerData.email);
            if (customer) {
                if (!customer.id) {
                    throw new Error("Customer ID is required to update the customer");
                }
                const updatedCustomer = await this.replaceCustomer(customer.id, customerData);
                return updatedCustomer;
            }
            const newCustomer = await this.createCustomer(customerData);
            return newCustomer;
        }
        catch (error) {
            console.error("Error in getOrCreateCustomer:", error);
            throw error;
        }
    }
}
export default CustomerService;
//# sourceMappingURL=customerService.js.map