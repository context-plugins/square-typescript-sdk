import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Represents an individual delete request in a
 * [BulkDeleteBookingCustomAttributes](api-endpoint:BookingCustomAttributes-BulkDeleteBookingCustomAttributes)
 * request. An individual request contains a booking ID, the custom attribute to delete, and an
 * optional idempotency key.
 */
export type BookingCustomAttributeDeleteRequest = {
  /** The ID of the target [booking](entity:Booking). */
  bookingId: string;
  /**
   * The key of the custom attribute to delete. This key must match the `key` of a custom attribute
   * definition in the Square seller account. If the requesting application is not the definition
   * owner, you must use the qualified key.
   */
  key: string;
};

export const bookingCustomAttributeDeleteRequestSchema: Schema<BookingCustomAttributeDeleteRequest> =
  s.object<BookingCustomAttributeDeleteRequest>({
    bookingId: s.string(),
    key: s.string(),
    _keysMap: {
      bookingId: "booking_id",
    },
  });
