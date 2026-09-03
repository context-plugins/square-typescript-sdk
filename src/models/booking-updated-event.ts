import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bookingUpdatedEventDataSchema, type BookingUpdatedEventData } from "./booking-updated-event-data.js";

export type BookingUpdatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
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
