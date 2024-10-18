import { paths } from "../schema";
export type AddTicketTagRequestBody =
  paths["/tickettags"]["post"]["requestBody"]["content"]["application/json"]["content"];

export type AddTicketTagResponse =
  paths["/tickettags"]["post"]["responses"]["200"]["content"]["application/json"];

export type TicketTagConfigAllRequest =
  paths["/tickettags"]["get"]["parameters"]["query"];

export type TicketTagConfigAllResponse =
  paths["/tickettags"]["get"]["responses"]["200"]["content"]["application/json"];

export type TicketTagUpdateRequestBody =
  paths["/tickettags/{id}"]["put"]["requestBody"]["content"]["application/json"]["content"];

export type TicketTagUpdateResponse =
  paths["/tickettags/{id}"]["put"]["responses"]["200"]["content"]["application/json"];

export type TicketTagDeleteRequestBody =
  paths["/tickettags/{id}"]["delete"]["parameters"]["path"]["id"];

export type TicketTagDeleteResponse =
  paths["/tickettags/{id}"]["delete"]["responses"]["200"]["content"]["application/json"];
