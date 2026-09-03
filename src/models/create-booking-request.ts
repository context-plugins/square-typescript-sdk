import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bookingSchema, type Booking } from "./booking.js";

export type CreateBookingRequest = {
  idempotencyKey?: string;
  booking: Booking;
};

export const createBookingRequestSchema: Schema<CreateBookingRequest> = s.object<CreateBookingRequest>({
  idempotencyKey: s.optional(s.string()),
  booking: bookingSchema,
  _keysMap: {
    idempotencyKey: "idempotency_key",
  },
});
