import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderCreatedEventDataSchema, type OrderCreatedEventData } from "./order-created-event-data.js";

/**
 * Published when an [Order](entity:Order) is created. This event is triggered only by the
 * [CreateOrder](api-endpoint:Orders-CreateOrder) endpoint call.
 *
 * Creating an order in the Point of Sale app will **not** publish this event.
 */
export type OrderCreatedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents, `"order.created"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was created, in RFC 3339 format. */
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
