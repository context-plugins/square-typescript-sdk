import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeEventDataSchema,
  type CustomAttributeEventData,
} from "./custom-attribute-event-data.js";

/**
 * Published when an order [custom attribute](entity:CustomAttribute) associated with a [custom
 * attribute definition](entity:CustomAttributeDefinition) that is owned by the subscribing app is
 * updated.
 */
export type OrderCustomAttributeOwnedUpdatedEvent = {
  /** The ID of the target seller associated with the event. */
  merchantId?: string | null;
  /** The type of this event. The value is `"order.custom_attribute.owned.updated"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** The timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: CustomAttributeEventData;
};

export const orderCustomAttributeOwnedUpdatedEventSchema: Schema<OrderCustomAttributeOwnedUpdatedEvent> =
  s.object<OrderCustomAttributeOwnedUpdatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => customAttributeEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
