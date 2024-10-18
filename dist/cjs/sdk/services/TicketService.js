"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseApi_1 = require("./BaseApi");
// Ticket API class
class TicketService extends BaseApi_1.BaseAPI {
    async tickets(request) {
        return this.handleResponse(() => this.client.GET("/tickets", { query: request }));
    }
    async createTicket(ticketData) {
        return this.handleResponse(() => this.client.POST("/tickets", {
            body: {
                content: ticketData,
            },
        }));
    }
    async updateTicket(id, ticketData) {
        return this.handleResponse(() => this.client.PUT("/tickets/{id}", {
            params: { path: { id } },
            body: {
                content: ticketData,
            },
        }));
    }
    async updateTicketMaterial(material) {
        return this.handleResponse(() => this.client.POST("/tickets/materials", {
            body: { content: material },
        }));
    }
    async getTicket(ticketId) {
        return this.handleResponse(() => this.client.GET("/tickets/{id}", {
            params: { path: { id: ticketId } },
        }));
    }
    async deleteTicket(ticketId) {
        return this.handleResponse(() => this.client.DELETE("/tickets/{id}", {
            params: { path: { id: ticketId } },
        }));
    }
}
exports.default = TicketService;
//# sourceMappingURL=TicketService.js.map