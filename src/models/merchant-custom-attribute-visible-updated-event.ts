import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeEventDataSchema,
  type CustomAttributeEventData,
} from "./custom-attribute-event-data.js";

/**
 * Published when a merchant [custom attribute](entity:CustomAttribute) with the `visibility` field
 * set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES` is updated. An application that
 * subscribes to this event is notified when a merchant custom attribute is updated by any
 * application for which the subscribing application has read access to the merchant custom
 * attribute.
 */
export type MerchantCustomAttributeVisibleUpdatedEvent = {
  /** The ID of the seller associated with the event that triggered the event notification. */
  merchantId?: string | null;
  /** The type of this event. The value is `"merchant.custom_attribute.visible.updated"`. */
  type?: string | null;
  /** A unique ID for the event notification. */
  eventId?: string | null;
  /** The timestamp that indicates when the event notification was created, in RFC 3339 format. */
  createdAt?: string;
  data?: CustomAttributeEventData;
};

export const merchantCustomAttributeVisibleUpdatedEventSchema: Schema<MerchantCustomAttributeVisibleUpdatedEvent> =
  s.object<MerchantCustomAttributeVisibleUpdatedEvent>({
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
