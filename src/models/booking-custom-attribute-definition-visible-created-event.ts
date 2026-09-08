import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeDefinitionEventDataSchema,
  type CustomAttributeDefinitionEventData,
} from "./custom-attribute-definition-event-data.js";

/**
 * Published when a booking [custom attribute definition](entity:CustomAttributeDefinition) with the
 * `visibility` field set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES` is created. An
 * application that subscribes to this event is notified when a booking custom attribute definition
 * is created by any application for which the subscribing application has read access to the
 * booking custom attribute definition.
 */
export type BookingCustomAttributeDefinitionVisibleCreatedEvent = {
  /** The ID of the seller associated with the event that triggered the event notification. */
  merchantId?: string | null;
  /**
   * The type of this event. The value is `"booking.custom_attribute_definition.visible.created"`.
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

export const bookingCustomAttributeDefinitionVisibleCreatedEventSchema: Schema<BookingCustomAttributeDefinitionVisibleCreatedEvent> =
  s.object<BookingCustomAttributeDefinitionVisibleCreatedEvent>({
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
