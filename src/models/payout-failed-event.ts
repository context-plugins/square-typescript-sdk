import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payoutFailedEventDataSchema, type PayoutFailedEventData } from "./payout-failed-event-data.js";

/** Published when a [Payout](entity:Payout) has failed. */
export type PayoutFailedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The ID of the target location associated with the event. */
  locationId?: string | null;
  /** The type of event that this represents, `payout.failed`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** The timestamp of when the event was verified, in RFC 3339 format. */
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
