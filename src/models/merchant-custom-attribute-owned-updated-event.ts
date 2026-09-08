import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeEventDataSchema,
  type CustomAttributeEventData,
} from "./custom-attribute-event-data.js";

/**
 * Published when a merchant [custom attribute](entity:CustomAttribute) associated with a [custom
 * attribute definition](entity:CustomAttributeDefinition) that is owned by the subscribing
 * application is updated. Subscribe to this event to be notified when your application updates a
 * merchant custom attribute.
 */
export type MerchantCustomAttributeOwnedUpdatedEvent = {
  /** The ID of the seller associated with the event that triggered the event notification. */
  merchantId?: string | null;
  /** The type of this event. The value is `"merchant.custom_attribute.owned.updated"`. */
  type?: string | null;
  /** A unique ID for the event notification. */
  eventId?: string | null;
  /** The timestamp that indicates when the event notification was created, in RFC 3339 format. */
  createdAt?: string;
  data?: CustomAttributeEventData;
};

export const merchantCustomAttributeOwnedUpdatedEventSchema: Schema<MerchantCustomAttributeOwnedUpdatedEvent> =
  s.object<MerchantCustomAttributeOwnedUpdatedEvent>({
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
