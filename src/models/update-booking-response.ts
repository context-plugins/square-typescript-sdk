import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bookingSchema, type Booking } from "./booking.js";
import { errorSchema, type Error } from "./error.js";

export type UpdateBookingResponse = {
  /**
   * Represents a booking as a time-bound service contract for a seller's staff member to provide a
   * specified service at a given location to a requesting customer in one or more appointment
   * segments.
   */
  booking?: Booking;
  /** Errors that occurred during the request. */
  errors?: Error[];
};

export const updateBookingResponseSchema: Schema<UpdateBookingResponse> = s.object<UpdateBookingResponse>({
  booking: s.optional(s.lazy(() => bookingSchema)),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
