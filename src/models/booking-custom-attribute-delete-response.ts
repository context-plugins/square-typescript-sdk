import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Represents a response for an individual upsert request in a
 * [BulkDeleteBookingCustomAttributes](api-endpoint:BookingCustomAttributes-BulkDeleteBookingCustomAttributes)
 * operation.
 */
export type BookingCustomAttributeDeleteResponse = {
  /** The ID of the [booking](entity:Booking) associated with the custom attribute. */
  bookingId?: string;
  /** Any errors that occurred while processing the individual request. */
  errors?: Error[];
};

export const bookingCustomAttributeDeleteResponseSchema: Schema<BookingCustomAttributeDeleteResponse> =
  s.object<BookingCustomAttributeDeleteResponse>({
    bookingId: s.optional(s.string()),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      bookingId: "booking_id",
    },
  });
