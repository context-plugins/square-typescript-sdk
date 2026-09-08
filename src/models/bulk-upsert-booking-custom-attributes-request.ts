import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bookingCustomAttributeUpsertRequestSchema,
  type BookingCustomAttributeUpsertRequest,
} from "./booking-custom-attribute-upsert-request.js";

/**
 * Represents a
 * [BulkUpsertBookingCustomAttributes](api-endpoint:BookingCustomAttributes-BulkUpsertBookingCustomAttributes)
 * request.
 */
export type BulkUpsertBookingCustomAttributesRequest = {
  /**
   * A map containing 1 to 25 individual upsert requests. For each request, provide an arbitrary ID
   * that is unique for this `BulkUpsertBookingCustomAttributes` request and the information needed
   * to create or update a custom attribute.
   */
  values: Record<string, BookingCustomAttributeUpsertRequest>;
};

export const bulkUpsertBookingCustomAttributesRequestSchema: Schema<BulkUpsertBookingCustomAttributesRequest> =
  s.object<BulkUpsertBookingCustomAttributesRequest>({
    values: s.record(
      s.string(),
      s.lazy(() => bookingCustomAttributeUpsertRequestSchema),
    ),
  });
