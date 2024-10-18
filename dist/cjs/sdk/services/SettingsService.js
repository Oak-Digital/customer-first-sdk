"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseApi_1 = require("./BaseApi");
// Ticket API class
class SettingsService extends BaseApi_1.BaseAPI {
    async getStore() {
        return this.handleResponse(() => this.client.GET("/settings"));
    }
}
exports.default = SettingsService;
//# sourceMappingURL=SettingsService.js.map