import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeEventDataSchema,
  type CustomAttributeEventData,
} from "./custom-attribute-event-data.js";

/**
 * Published when a customer [custom attribute](entity:CustomAttribute) that is visible to the
 * subscribing application is created or updated. A notification is sent when:
 * - Your application creates or updates a custom attribute owned by your application, regardless of
 *   the `visibility` setting.
 * - Any application creates or updates a custom attribute whose `visibility` is
 *   `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
 *
 * Custom attributes set to `VISIBILITY_READ_WRITE_VALUES` can be created or updated by any
 * application, but those set to `VISIBILITY_READ_ONLY` or `VISIBILITY_HIDDEN` can only be created
 * or updated by the owner. Custom attributes are owned by the application that created the
 * corresponding [custom attribute definition](entity:CustomAttributeDefinition).
 */
export type CustomerCustomAttributeVisibleUpdatedEvent = {
  /** The ID of the seller associated with the event that triggered the event notification. */
  merchantId?: string | null;
  /** The type of this event. The value is `"customer.custom_attribute.visible.updated"`. */
  type?: string | null;
  /** A unique ID for the event notification. */
  eventId?: string | null;
  /** The timestamp that indicates when the event notification was created, in RFC 3339 format. */
  createdAt?: string;
  data?: CustomAttributeEventData;
};

export const customerCustomAttributeVisibleUpdatedEventSchema: Schema<CustomerCustomAttributeVisibleUpdatedEvent> =
  s.object<CustomerCustomAttributeVisibleUpdatedEvent>({
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
