import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardForgottenEventDataSchema, type CardForgottenEventData } from "./card-forgotten-event-data.js";

export type CardForgottenEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: CardForgottenEventData;
};

export const cardForgottenEventSchema: Schema<CardForgottenEvent> = s.object<CardForgottenEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => cardForgottenEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
