import {
  TicketMaterialRequestBody,
  TicketRequestBody,
  ticketsRequest,
  TicketUpdate,
} from "../types";
import { BaseAPI } from "./BaseApi";

// Ticket API class
class TicketService extends BaseAPI {
  async tickets(request?: ticketsRequest) {
    return this.handleResponse(() =>
      this.client.GET("/tickets", { query: request }),
    );
  }

  async createTicket(ticketData: TicketRequestBody) {
    return this.handleResponse(() =>
      this.client.POST("/tickets", {
        body: {
          content: ticketData,
        },
      }),
    );
  }

  async updateTicket(id: number, ticketData: TicketUpdate) {
    return this.handleResponse(() =>
      this.client.PUT("/tickets/{id}", {
        params: { path: { id } },
        body: {
          content: ticketData,
        },
      }),
    );
  }

  async updateTicketMaterial(material: TicketMaterialRequestBody) {
    return this.handleResponse(() =>
      this.client.POST("/tickets/materials", {
        body: { content: material },
      }),
    );
  }

  async getTicket(ticketId: number) {
    return this.handleResponse(() =>
      this.client.GET("/tickets/{id}", {
        params: { path: { id: ticketId } },
      }),
    );
  }

  async deleteTicket(ticketId: number) {
    return this.handleResponse(() =>
      this.client.DELETE("/tickets/{id}", {
        params: { path: { id: ticketId } },
      }),
    );
  }
}

export default TicketService;
