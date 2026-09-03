import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bookingSchema, type Booking } from "./booking.js";

export type BookingUpdatedEventObject = {
  booking?: Booking;
};

export const bookingUpdatedEventObjectSchema: Schema<BookingUpdatedEventObject> =
  s.object<BookingUpdatedEventObject>({
    booking: s.optional(s.lazy(() => bookingSchema)),
  });
