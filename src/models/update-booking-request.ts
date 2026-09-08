import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bookingSchema, type Booking } from "./booking.js";

export type UpdateBookingRequest = {
  /** A unique key to make this request an idempotent operation. */
  idempotencyKey?: string | null;
  /**
   * Represents a booking as a time-bound service contract for a seller's staff member to provide a
   * specified service at a given location to a requesting customer in one or more appointment
   * segments.
   */
  booking: Booking;
};

export const updateBookingRequestSchema: Schema<UpdateBookingRequest> = s.object<UpdateBookingRequest>({
  idempotencyKey: s.optionalNullable(s.string()),
  booking: bookingSchema,
  _keysMap: {
    idempotencyKey: "idempotency_key",
  },
});
