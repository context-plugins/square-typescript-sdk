import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Represents a
 * [DeleteBookingCustomAttribute](api-endpoint:BookingCustomAttributes-DeleteBookingCustomAttribute)
 * response. Either an empty object `{}` (for a successful deletion) or `errors` is present in the
 * response.
 */
export type DeleteBookingCustomAttributeResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const deleteBookingCustomAttributeResponseSchema: Schema<DeleteBookingCustomAttributeResponse> =
  s.object<DeleteBookingCustomAttributeResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
