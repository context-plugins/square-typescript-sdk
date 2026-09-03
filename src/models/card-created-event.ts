import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardCreatedEventDataSchema, type CardCreatedEventData } from "./card-created-event-data.js";

export type CardCreatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
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
