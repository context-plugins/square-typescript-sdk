import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bookingSchema, type Booking } from "./booking.js";
import { errorSchema, type Error } from "./error.js";

export type CreateBookingResponse = {
  booking?: Booking;
  errors?: Error[];
};

export const createBookingResponseSchema: Schema<CreateBookingResponse> = s.object<CreateBookingResponse>({
  booking: s.optional(s.lazy(() => bookingSchema)),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
