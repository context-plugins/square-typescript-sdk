import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payoutFailedEventDataSchema, type PayoutFailedEventData } from "./payout-failed-event-data.js";

export type PayoutFailedEvent = {
  merchantId?: string | null;
  locationId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: PayoutFailedEventData;
};

export const payoutFailedEventSchema: Schema<PayoutFailedEvent> = s.object<PayoutFailedEvent>({
  merchantId: s.optionalNullable(s.string()),
  locationId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => payoutFailedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    locationId: "location_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
