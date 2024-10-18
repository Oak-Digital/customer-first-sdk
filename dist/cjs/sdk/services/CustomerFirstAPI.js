"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customerService_1 = __importDefault(require("./customerService"));
const ProductService_1 = __importDefault(require("./ProductService"));
const SettingsService_1 = __importDefault(require("./SettingsService"));
const TicketService_1 = __importDefault(require("./TicketService"));
const UsersService_1 = __importDefault(require("./UsersService"));
class CustomerFirstAPI {
    customers;
    tickets;
    products;
    settings;
    users;
    constructor(apiKey, baseUrl) {
        this.customers = new customerService_1.default(apiKey, baseUrl);
        this.tickets = new TicketService_1.default(apiKey, baseUrl);
        this.products = new ProductService_1.default(apiKey, baseUrl);
        this.settings = new SettingsService_1.default(apiKey, baseUrl);
        this.users = new UsersService_1.default(apiKey, baseUrl);
    }
    custom(options) {
        return this.tickets.customEndpoint(options);
    }
}
exports.default = CustomerFirstAPI;
//# sourceMappingURL=CustomerFirstAPI.js.map