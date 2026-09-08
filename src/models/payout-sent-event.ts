import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payoutSentEventDataSchema, type PayoutSentEventData } from "./payout-sent-event-data.js";

/** Published when a [Payout](entity:Payout) is sent. */
export type PayoutSentEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The ID of the target location associated with the event. */
  locationId?: string | null;
  /** The type of event this represents, `"payout.sent"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was verified, in RFC 3339 format. */
  createdAt?: string;
  data?: PayoutSentEventData;
};

export const payoutSentEventSchema: Schema<PayoutSentEvent> = s.object<PayoutSentEvent>({
  merchantId: s.optionalNullable(s.string()),
  locationId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => payoutSentEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    locationId: "location_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
