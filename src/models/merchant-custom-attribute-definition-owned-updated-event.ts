import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeDefinitionEventDataSchema,
  type CustomAttributeDefinitionEventData,
} from "./custom-attribute-definition-event-data.js";

/**
 * Published when a merchant [custom attribute definition](entity:CustomAttributeDefinition) is
 * updated by the subscribing application. Subscribe to this event to be notified when your
 * application updates a merchant custom attribute definition.
 */
export type MerchantCustomAttributeDefinitionOwnedUpdatedEvent = {
  /** The ID of the seller associated with the event that triggered the event notification. */
  merchantId?: string | null;
  /**
   * The type of this event. The value is `"merchant.custom_attribute_definition.owned.updated"`.
   */
  type?: string | null;
  /** A unique ID for the event notification. */
  eventId?: string | null;
  /** The timestamp that indicates when the event notification was created, in RFC 3339 format. */
  createdAt?: string;
  /**
   * Represents an object in the CustomAttributeDefinition event notification payload that contains
   * the affected custom attribute definition.
   */
  data?: CustomAttributeDefinitionEventData;
};

export const merchantCustomAttributeDefinitionOwnedUpdatedEventSchema: Schema<MerchantCustomAttributeDefinitionOwnedUpdatedEvent> =
  s.object<MerchantCustomAttributeDefinitionOwnedUpdatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => customAttributeDefinitionEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
