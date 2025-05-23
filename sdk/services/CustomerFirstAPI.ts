import { CustomEndpointOptions, HttpMethod } from "../types/common";
import CustomerService from "./customerService";
import ProductService from "./ProductService";
import SettingsService from "./SettingsService";
import TicketService from "./TicketService";
import GiftcardService from "./GiftcardService";
import TicketTagService from "./TicketTags";
import UsersService from "./UsersService";
import POSPaymentsService from "./POSPaymentsService";
import PaymentTypesService from "./paymenttypesService";


class CustomerFirstAPI {
  customers: CustomerService;
  tickets: TicketService;
  products: ProductService;
  settings: SettingsService;
  users: UsersService;
  ticketTags: TicketTagService;
  giftcards: GiftcardService;
  posPayments: POSPaymentsService; // Add the new service property
  paymentTypes: PaymentTypesService;

  constructor(apiKey: string, baseUrl?: string) {
    this.customers = new CustomerService(apiKey, baseUrl);
    this.tickets = new TicketService(apiKey, baseUrl);
    this.products = new ProductService(apiKey, baseUrl);
    this.settings = new SettingsService(apiKey, baseUrl);
    this.users = new UsersService(apiKey, baseUrl);
    this.ticketTags = new TicketTagService(apiKey, baseUrl);
    this.giftcards = new GiftcardService(apiKey, baseUrl);
    this.posPayments = new POSPaymentsService(apiKey, baseUrl); // Instantiate the new service
    this.paymentTypes = new PaymentTypesService(apiKey, baseUrl); // Instantiate the new service
  }

  // TODO: Consider if the 'custom' method should delegate specifically to TicketService
  // or if CustomerFirstAPI should have its own BaseAPI instance or client access.
  custom<T = unknown, M extends HttpMethod = HttpMethod>(
    options: CustomEndpointOptions<M>,
  ): Promise<T> {
    return this.tickets.customEndpoint<T, M>(options);
  }
}

export default CustomerFirstAPI;
