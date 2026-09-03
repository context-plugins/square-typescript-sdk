import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderUpdatedEventDataSchema, type OrderUpdatedEventData } from "./order-updated-event-data.js";

export type OrderUpdatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: OrderUpdatedEventData;
};

export const orderUpdatedEventSchema: Schema<OrderUpdatedEvent> = s.object<OrderUpdatedEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => orderUpdatedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
