import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bookingCreatedEventDataSchema, type BookingCreatedEventData } from "./booking-created-event-data.js";

export type BookingCreatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
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
