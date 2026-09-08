import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardCreatedEventDataSchema, type CardCreatedEventData } from "./card-created-event-data.js";

/** Published when a [card](entity:Card) is created or imported. */
export type CardCreatedEvent = {
  /** The ID of the target seller associated with the event. */
  merchantId?: string | null;
  /** The type of this event. The value is `"card.created"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** The timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: CardCreatedEventData;
};

export const cardCreatedEventSchema: Schema<CardCreatedEvent> = s.object<CardCreatedEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => cardCreatedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
