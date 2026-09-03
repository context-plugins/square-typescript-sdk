import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cardAutomaticallyUpdatedEventDataSchema,
  type CardAutomaticallyUpdatedEventData,
} from "./card-automatically-updated-event-data.js";

export type CardAutomaticallyUpdatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
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
