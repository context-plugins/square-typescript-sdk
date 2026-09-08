import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bookingCustomAttributeUpsertResponseSchema,
  type BookingCustomAttributeUpsertResponse,
} from "./booking-custom-attribute-upsert-response.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Represents a
 * [BulkUpsertBookingCustomAttributes](api-endpoint:BookingCustomAttributes-BulkUpsertBookingCustomAttributes)
 * response, which contains a map of responses that each corresponds to an individual upsert
 * request.
 */
export type BulkUpsertBookingCustomAttributesResponse = {
  /**
   * A map of responses that correspond to individual upsert requests. Each response has the same ID
   * as the corresponding request and contains either a `booking_id` and `custom_attribute` or an
   * `errors` field.
   */
  values?: Record<string, BookingCustomAttributeUpsertResponse>;
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const bulkUpsertBookingCustomAttributesResponseSchema: Schema<BulkUpsertBookingCustomAttributesResponse> =
  s.object<BulkUpsertBookingCustomAttributesResponse>({
    values: s.optional(
      s.record(
        s.string(),
        s.lazy(() => bookingCustomAttributeUpsertResponseSchema),
      ),
    ),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
