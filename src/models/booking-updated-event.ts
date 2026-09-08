import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bookingUpdatedEventDataSchema, type BookingUpdatedEventData } from "./booking-updated-event-data.js";

/**
 * Published when a booking is updated or cancelled.
 *
 * To receive this event with buyer-level permissions, you must have `APPOINTMENTS_READ` set for the
 * OAuth scope. To receive this event with seller-level permissions, you must have
 * `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` set for the OAuth scope.
 */
export type BookingUpdatedEvent = {
  /** The ID of the target seller associated with the event. */
  merchantId?: string | null;
  /** The type of this event. The value is `"booking.updated"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** The timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: BookingUpdatedEventData;
};

export const bookingUpdatedEventSchema: Schema<BookingUpdatedEvent> = s.object<BookingUpdatedEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => bookingUpdatedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
