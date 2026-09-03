import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bookingSchema, type Booking } from "./booking.js";

export type UpdateBookingRequest = {
  idempotencyKey?: string | null;
  booking: Booking;
};

export const updateBookingRequestSchema: Schema<UpdateBookingRequest> = s.object<UpdateBookingRequest>({
  idempotencyKey: s.optionalNullable(s.string()),
  booking: bookingSchema,
  _keysMap: {
    idempotencyKey: "idempotency_key",
  },
});
