import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bookingSchema, type Booking } from "./booking.js";
import { errorSchema, type Error } from "./error.js";

export type ListBookingsResponse = {
  bookings?: Booking[];
  cursor?: string;
  errors?: Error[];
};

export const listBookingsResponseSchema: Schema<ListBookingsResponse> = s.object<ListBookingsResponse>({
  bookings: s.optional(s.array(s.lazy(() => bookingSchema))),
  cursor: s.optional(s.string()),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
