import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bookingCreatedEventDataSchema, type BookingCreatedEventData } from "./booking-created-event-data.js";

/**
 * Published when a booking is created.
 *
 * To receive this event with buyer-level permissions, you must have `APPOINTMENTS_READ` set for the
 * OAuth scope. To receive this event with seller-level permissions, you must have
 * `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` set for the OAuth scope.
 */
export type BookingCreatedEvent = {
  /** The ID of the target seller associated with the event. */
  merchantId?: string | null;
  /** The type of this event. The value is `"booking.created"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** The timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: BookingCreatedEventData;
};

export const bookingCreatedEventSchema: Schema<BookingCreatedEvent> = s.object<BookingCreatedEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => bookingCreatedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
