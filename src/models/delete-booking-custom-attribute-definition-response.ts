import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Represents a
 * [DeleteBookingCustomAttributeDefinition](api-endpoint:BookingCustomAttributes-DeleteBookingCustomAttributeDefinition)
 * response containing error messages when errors occurred during the request. The successful
 * response does not contain any payload.
 */
export type DeleteBookingCustomAttributeDefinitionResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const deleteBookingCustomAttributeDefinitionResponseSchema: Schema<DeleteBookingCustomAttributeDefinitionResponse> =
  s.object<DeleteBookingCustomAttributeDefinitionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
