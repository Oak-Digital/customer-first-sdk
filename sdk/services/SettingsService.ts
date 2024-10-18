import { BaseAPI } from "./BaseApi";

// Ticket API class
class SettingsService extends BaseAPI {
  async getStore() {
    return this.handleResponse(() => this.client.GET("/settings"));
  }
}

export default SettingsService;
