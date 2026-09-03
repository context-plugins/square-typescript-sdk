import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderCreatedEventDataSchema, type OrderCreatedEventData } from "./order-created-event-data.js";

export type OrderCreatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: OrderCreatedEventData;
};

export const orderCreatedEventSchema: Schema<OrderCreatedEvent> = s.object<OrderCreatedEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => orderCreatedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
