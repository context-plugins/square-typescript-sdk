import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bookingCustomAttributeDeleteRequestSchema,
  type BookingCustomAttributeDeleteRequest,
} from "./booking-custom-attribute-delete-request.js";

/**
 * Represents a
 * [BulkDeleteBookingCustomAttributes](api-endpoint:BookingCustomAttributes-BulkDeleteBookingCustomAttributes)
 * request.
 */
export type BulkDeleteBookingCustomAttributesRequest = {
  /**
   * A map containing 1 to 25 individual Delete requests. For each request, provide an arbitrary ID
   * that is unique for this `BulkDeleteBookingCustomAttributes` request and the information needed
   * to delete a custom attribute.
   */
  values: Record<string, BookingCustomAttributeDeleteRequest>;
};

export const bulkDeleteBookingCustomAttributesRequestSchema: Schema<BulkDeleteBookingCustomAttributesRequest> =
  s.object<BulkDeleteBookingCustomAttributesRequest>({
    values: s.record(
      s.string(),
      s.lazy(() => bookingCustomAttributeDeleteRequestSchema),
    ),
  });
