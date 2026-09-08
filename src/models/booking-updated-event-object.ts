import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bookingSchema, type Booking } from "./booking.js";

export type BookingUpdatedEventObject = {
  /**
   * Represents a booking as a time-bound service contract for a seller's staff member to provide a
   * specified service at a given location to a requesting customer in one or more appointment
   * segments.
   */
  booking?: Booking;
};

export const bookingUpdatedEventObjectSchema: Schema<BookingUpdatedEventObject> =
  s.object<BookingUpdatedEventObject>({
    booking: s.optional(s.lazy(() => bookingSchema)),
  });
