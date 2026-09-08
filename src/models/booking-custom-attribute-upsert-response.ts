import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customAttributeSchema, type CustomAttribute } from "./custom-attribute.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Represents a response for an individual upsert request in a
 * [BulkUpsertBookingCustomAttributes](api-endpoint:BookingCustomAttributes-BulkUpsertBookingCustomAttributes)
 * operation.
 */
export type BookingCustomAttributeUpsertResponse = {
  /** The ID of the [booking](entity:Booking) associated with the custom attribute. */
  bookingId?: string;
  /**
   * A custom attribute value. Each custom attribute value has a corresponding
   * `CustomAttributeDefinition` object.
   */
  customAttribute?: CustomAttribute;
  /** Any errors that occurred while processing the individual request. */
  errors?: Error[];
};

export const bookingCustomAttributeUpsertResponseSchema: Schema<BookingCustomAttributeUpsertResponse> =
  s.object<BookingCustomAttributeUpsertResponse>({
    bookingId: s.optional(s.string()),
    customAttribute: s.optional(s.lazy(() => customAttributeSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      bookingId: "booking_id",
      customAttribute: "custom_attribute",
    },
  });
