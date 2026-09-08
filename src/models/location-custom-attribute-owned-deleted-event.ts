import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeEventDataSchema,
  type CustomAttributeEventData,
} from "./custom-attribute-event-data.js";

/**
 * Published when a location [custom attribute](entity:CustomAttribute) owned by the subscribing
 * application is deleted. Custom attributes are owned by the application that created the
 * corresponding [custom attribute definition](entity:CustomAttributeDefinition). Custom attributes
 * whose `visibility` is `VISIBILITY_READ_WRITE_VALUES` can be deleted by any application.
 */
export type LocationCustomAttributeOwnedDeletedEvent = {
  /** The ID of the seller associated with the event that triggered the event notification. */
  merchantId?: string | null;
  /** The type of this event. The value is `"location.custom_attribute.owned.deleted"`. */
  type?: string | null;
  /** A unique ID for the event notification. */
  eventId?: string | null;
  /** The timestamp that indicates when the event notification was created, in RFC 3339 format. */
  createdAt?: string;
  data?: CustomAttributeEventData;
};

export const locationCustomAttributeOwnedDeletedEventSchema: Schema<LocationCustomAttributeOwnedDeletedEvent> =
  s.object<LocationCustomAttributeOwnedDeletedEvent>({
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
