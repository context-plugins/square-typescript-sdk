import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderUpdatedEventDataSchema, type OrderUpdatedEventData } from "./order-updated-event-data.js";

/**
 * Published when an [Order](entity:Order) is updated. This event is triggered by the
 * [UpdateOrder](api-endpoint:Orders-UpdateOrder) endpoint call, Order Manager, or the Square
 * Dashboard.
 */
export type OrderUpdatedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents, `"order.updated"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was created, in RFC 3339 format. */
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
