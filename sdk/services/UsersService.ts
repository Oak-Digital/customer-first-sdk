import { BaseAPI } from "./BaseApi";

// Ticket API class
class UsersService extends BaseAPI {
  async getUsers() {
    return this.handleResponse(() => this.client.GET("/users"));
  }
}

export default UsersService;
