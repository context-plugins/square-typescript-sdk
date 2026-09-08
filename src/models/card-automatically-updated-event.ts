import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cardAutomaticallyUpdatedEventDataSchema,
  type CardAutomaticallyUpdatedEventData,
} from "./card-automatically-updated-event-data.js";

/**
 * Published when Square automatically updates the expiration date or primary account number (PAN)
 * of a [card](entity:Card) or adds or removes an issuer alert.
 */
export type CardAutomaticallyUpdatedEvent = {
  /** The ID of the target seller associated with the event. */
  merchantId?: string | null;
  /** The type of this event. The value is `"card.automatically_updated"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** The timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: CardAutomaticallyUpdatedEventData;
};

export const cardAutomaticallyUpdatedEventSchema: Schema<CardAutomaticallyUpdatedEvent> =
  s.object<CardAutomaticallyUpdatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => cardAutomaticallyUpdatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
