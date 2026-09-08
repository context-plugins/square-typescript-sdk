import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  disputeStateChangedEventDataSchema,
  type DisputeStateChangedEventData,
} from "./dispute-state-changed-event-data.js";

/**
 * Published when the state of a [Dispute](entity:Dispute) changes. This includes the dispute
 * resolution (WON, LOST) reported by the bank. The event data includes details of what changed.
 */
export type DisputeStateChangedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The ID of the target location associated with the event. */
  locationId?: string | null;
  /** The type of event this represents. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: DisputeStateChangedEventData;
};

export const disputeStateChangedEventSchema: Schema<DisputeStateChangedEvent> =
  s.object<DisputeStateChangedEvent>({
    merchantId: s.optionalNullable(s.string()),
    locationId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => disputeStateChangedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      locationId: "location_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
