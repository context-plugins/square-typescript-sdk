import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardDisabledEventDataSchema, type CardDisabledEventData } from "./card-disabled-event-data.js";

/** Published when a [card](entity:Card) is disabled. */
export type CardDisabledEvent = {
  /** The ID of the target seller associated with the event. */
  merchantId?: string | null;
  /** The type of this event. The value is `"card.disabled"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** The timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: CardDisabledEventData;
};

export const cardDisabledEventSchema: Schema<CardDisabledEvent> = s.object<CardDisabledEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => cardDisabledEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
