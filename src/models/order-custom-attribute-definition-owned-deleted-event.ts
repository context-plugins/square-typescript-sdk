import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeDefinitionEventDataSchema,
  type CustomAttributeDefinitionEventData,
} from "./custom-attribute-definition-event-data.js";

/**
 * Published when an order [custom attribute definition](entity:CustomAttributeDefinition) that is
 * owned by the subscribing app is deleted.
 */
export type OrderCustomAttributeDefinitionOwnedDeletedEvent = {
  /** The ID of the target seller associated with the event. */
  merchantId?: string | null;
  /** The type of this event. The value is `"order.custom_attribute_definition.owned.deleted"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** The timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  /**
   * Represents an object in the CustomAttributeDefinition event notification payload that contains
   * the affected custom attribute definition.
   */
  data?: CustomAttributeDefinitionEventData;
};

export const orderCustomAttributeDefinitionOwnedDeletedEventSchema: Schema<OrderCustomAttributeDefinitionOwnedDeletedEvent> =
  s.object<OrderCustomAttributeDefinitionOwnedDeletedEvent>({
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
