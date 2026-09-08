import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeDefinitionEventDataSchema,
  type CustomAttributeDefinitionEventData,
} from "./custom-attribute-definition-event-data.js";

/**
 * Published when a location [custom attribute definition](entity:CustomAttributeDefinition) that is
 * visible to the subscribing application is updated. A custom attribute definition can only be
 * updated by the application that created it. A notification is sent when your application updates
 * a custom attribute definition or when another application updates a custom attribute definition
 * whose `visibility` is `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
 */
export type LocationCustomAttributeDefinitionVisibleUpdatedEvent = {
  /** The ID of the seller associated with the event that triggered the event notification. */
  merchantId?: string | null;
  /**
   * The type of this event. The value is `"location.custom_attribute_definition.visible.updated"`.
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

export const locationCustomAttributeDefinitionVisibleUpdatedEventSchema: Schema<LocationCustomAttributeDefinitionVisibleUpdatedEvent> =
  s.object<LocationCustomAttributeDefinitionVisibleUpdatedEvent>({
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
