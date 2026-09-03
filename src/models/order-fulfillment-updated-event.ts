import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  orderFulfillmentUpdatedEventDataSchema,
  type OrderFulfillmentUpdatedEventData,
} from "./order-fulfillment-updated-event-data.js";

export type OrderFulfillmentUpdatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: OrderFulfillmentUpdatedEventData;
};

export const orderFulfillmentUpdatedEventSchema: Schema<OrderFulfillmentUpdatedEvent> =
  s.object<OrderFulfillmentUpdatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => orderFulfillmentUpdatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
