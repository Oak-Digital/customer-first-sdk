import {
  AddTicketTagResponse,
  AddTicketTagRequestBody,
  TicketTagConfigAllRequest,
  TicketTagConfigAllResponse,
  TicketTagDeleteRequestBody,
  TicketTagDeleteResponse,
  TicketTagUpdateRequestBody,
  TicketTagUpdateResponse,
} from "../types";
import { BaseAPI } from "./BaseApi";

// TicketTags API class
class TicketTagService extends BaseAPI {
  async(request?: AddTicketTagRequestBody): Promise<AddTicketTagResponse> {
    return this.handleResponse(() =>
      this.client.POST("/tickettags", {
        body: {
          content: request,
        },
      }),
    );
  }

  async getTicketTags(
    request?: TicketTagConfigAllRequest,
  ): Promise<TicketTagConfigAllResponse> {
    return this.handleResponse(() =>
      this.client.GET("/tickettags", { query: request }),
    );
  }

  async updateTicketTag(
    id: number,
    request?: TicketTagUpdateRequestBody,
  ): Promise<TicketTagUpdateResponse> {
    return this.handleResponse(() =>
      this.client.PUT("/tickettags/{id}", {
        params: { path: { id } },
        body: {
          content: request,
        },
      }),
    );
  }

  async deleteTicketTag(
    id: TicketTagDeleteRequestBody,
  ): Promise<TicketTagDeleteResponse> {
    return this.handleResponse(() =>
      this.client.DELETE("/tickettags/{id}", {
        params: { path: { id } },
      }),
    );
  }
}

export default TicketTagService;
