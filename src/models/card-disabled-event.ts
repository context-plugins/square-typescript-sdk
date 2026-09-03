import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardDisabledEventDataSchema, type CardDisabledEventData } from "./card-disabled-event-data.js";

export type CardDisabledEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
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
