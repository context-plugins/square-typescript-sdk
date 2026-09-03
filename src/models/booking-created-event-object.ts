import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bookingSchema, type Booking } from "./booking.js";

export type BookingCreatedEventObject = {
  booking?: Booking;
};

export const bookingCreatedEventObjectSchema: Schema<BookingCreatedEventObject> =
  s.object<BookingCreatedEventObject>({
    booking: s.optional(s.lazy(() => bookingSchema)),
  });
