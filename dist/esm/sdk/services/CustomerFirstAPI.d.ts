import { CustomEndpointOptions, HttpMethod } from "../types/common";
import CustomerService from "./customerService";
import ProductService from "./ProductService";
import SettingsService from "./SettingsService";
import TicketService from "./TicketService";
import UsersService from "./UsersService";
declare class CustomerFirstAPI {
    customers: CustomerService;
    tickets: TicketService;
    products: ProductService;
    settings: SettingsService;
    users: UsersService;
    constructor(apiKey: string, baseUrl?: string);
    custom<T = unknown, M extends HttpMethod = HttpMethod>(options: CustomEndpointOptions<M>): Promise<T>;
}
export default CustomerFirstAPI;
//# sourceMappingURL=CustomerFirstAPI.d.ts.map