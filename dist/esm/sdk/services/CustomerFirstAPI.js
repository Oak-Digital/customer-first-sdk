import CustomerService from "./customerService";
import ProductService from "./ProductService";
import SettingsService from "./SettingsService";
import TicketService from "./TicketService";
import UsersService from "./UsersService";
class CustomerFirstAPI {
    customers;
    tickets;
    products;
    settings;
    users;
    constructor(apiKey, baseUrl) {
        this.customers = new CustomerService(apiKey, baseUrl);
        this.tickets = new TicketService(apiKey, baseUrl);
        this.products = new ProductService(apiKey, baseUrl);
        this.settings = new SettingsService(apiKey, baseUrl);
        this.users = new UsersService(apiKey, baseUrl);
    }
    custom(options) {
        return this.tickets.customEndpoint(options);
    }
}
export default CustomerFirstAPI;
//# sourceMappingURL=CustomerFirstAPI.js.map