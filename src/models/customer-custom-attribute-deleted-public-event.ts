import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeEventDataSchema,
  type CustomAttributeEventData,
} from "./custom-attribute-event-data.js";

/**
 * Published when a customer [custom attribute](entity:CustomAttribute) that is visible to all
 * applications is deleted. A notification is sent when any application deletes a custom attribute
 * whose `visibility` is `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
 *
 * This event is replaced by
 * [customer.custom_attribute.visible.deleted](webhook:customer.custom_attribute.visible.deleted),
 * which applies to custom attributes that are visible to the subscribing application.
 */
export type CustomerCustomAttributeDeletedPublicEvent = {
  /** The ID of the seller associated with the event that triggered the event notification. */
  merchantId?: string | null;
  /** The type of this event. The value is `"customer.custom_attribute.public.deleted"`. */
  type?: string | null;
  /** A unique ID for the event notification. */
  eventId?: string | null;
  /** The timestamp that indicates when the event notification was created, in RFC 3339 format. */
  createdAt?: string;
  data?: CustomAttributeEventData;
};

export const customerCustomAttributeDeletedPublicEventSchema: Schema<CustomerCustomAttributeDeletedPublicEvent> =
  s.object<CustomerCustomAttributeDeletedPublicEvent>({
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
