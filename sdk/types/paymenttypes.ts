import type { components, paths } from "../schema";

// Base Type from Schema
export type PaymentType = components["schemas"]["PaymentType"];

// GET /paymenttypes
export type GetPaymentTypesResponse =
  paths["/paymenttypes"]["get"]["responses"]["200"]["content"]["application/json"];

// POST /paymenttypes
export type CreatePaymentTypeRequest =
  paths["/paymenttypes"]["post"]["requestBody"]["content"]["application/json"];
export type CreatePaymentTypeResponse =
  paths["/paymenttypes"]["post"]["responses"]["200"]["content"]["application/json"];

// GET /paymenttypes/{id}
export type GetPaymentTypeQueryParams =
  paths["/paymenttypes/{id}"]["get"]["parameters"]["query"];
export type GetPaymentTypeResponse =
  paths["/paymenttypes/{id}"]["get"]["responses"]["200"]["content"]["application/json"];

// PUT /paymenttypes/{id}
export type UpdatePaymentTypeQueryParams =
  paths["/paymenttypes/{id}"]["put"]["parameters"]["query"];
export type UpdatePaymentTypeRequest =
  paths["/paymenttypes/{id}"]["put"]["requestBody"]["content"]["application/json"];
export type UpdatePaymentTypeResponse =
  paths["/paymenttypes/{id}"]["put"]["responses"]["200"]["content"]["application/json"];

// DELETE /paymenttypes/{id}
export type DeletePaymentTypeResponse =
  paths["/paymenttypes/{id}"]["delete"]["responses"]["200"]["content"]["application/json"];
