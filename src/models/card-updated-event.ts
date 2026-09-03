import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardUpdatedEventDataSchema, type CardUpdatedEventData } from "./card-updated-event-data.js";

export type CardUpdatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: CardUpdatedEventData;
};

export const cardUpdatedEventSchema: Schema<CardUpdatedEvent> = s.object<CardUpdatedEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => cardUpdatedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
