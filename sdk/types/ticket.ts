import { components, paths } from "../schema";

export type Ticket =
  paths["/tickets"]["get"]["responses"]["200"]["content"]["application/json"];

export type TicketResponse =
  paths["/tickets"]["get"]["responses"]["200"]["content"]["application/json"];

export type TicketContent = components["schemas"]["Ticket"];

export type TicketRequestBody =
  paths["/tickets"]["post"]["requestBody"]["content"]["application/json"]["content"];

export type TicketMaterial =
  paths["/tickets/materials"]["get"]["responses"]["200"]["content"]["application/json"];

export type TicketMaterialRequestBody =
  paths["/tickets/materials"]["post"]["requestBody"]["content"]["application/json"]["content"];

export type TicketUpdate =
  paths["/tickets/{id}"]["put"]["requestBody"]["content"]["application/json"]["content"];

export type ticketsRequest = paths["/tickets"]["get"]["parameters"]["query"];

export type TicketMaterialContent = components["schemas"]["TicketMaterial"];
