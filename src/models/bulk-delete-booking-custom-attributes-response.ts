import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bookingCustomAttributeDeleteResponseSchema,
  type BookingCustomAttributeDeleteResponse,
} from "./booking-custom-attribute-delete-response.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Represents a
 * [BulkDeleteBookingCustomAttributes](api-endpoint:BookingCustomAttributes-BulkDeleteBookingCustomAttributes)
 * response, which contains a map of responses that each corresponds to an individual delete
 * request.
 */
export type BulkDeleteBookingCustomAttributesResponse = {
  /**
   * A map of responses that correspond to individual delete requests. Each response has the same ID
   * as the corresponding request and contains `booking_id` and `errors` field.
   */
  values?: Record<string, BookingCustomAttributeDeleteResponse>;
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const bulkDeleteBookingCustomAttributesResponseSchema: Schema<BulkDeleteBookingCustomAttributesResponse> =
  s.object<BulkDeleteBookingCustomAttributesResponse>({
    values: s.optional(
      s.record(
        s.string(),
        s.lazy(() => bookingCustomAttributeDeleteResponseSchema),
      ),
    ),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
