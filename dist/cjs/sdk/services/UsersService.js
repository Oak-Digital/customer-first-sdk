"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseApi_1 = require("./BaseApi");
// Ticket API class
class UsersService extends BaseApi_1.BaseAPI {
    async getUsers() {
        return this.handleResponse(() => this.client.GET("/users"));
    }
}
exports.default = UsersService;
//# sourceMappingURL=UsersService.js.map