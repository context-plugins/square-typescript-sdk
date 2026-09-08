import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { vendorCreatedEventDataSchema, type VendorCreatedEventData } from "./vendor-created-event-data.js";

/** Published when a [Vendor](entity:Vendor) is created. */
export type VendorCreatedEvent = {
  /** The ID of a seller associated with this event. */
  merchantId?: string | null;
  /**
   * The ID of a location associated with the event, if the event is associated with the location of
   * the seller.
   */
  locationId?: string | null;
  /** The type of this event. The value is `"vendor.created".` */
  type?: string | null;
  /** A unique ID for this event. */
  eventId?: string | null;
  /** The RFC 3339-formatted time when the underlying event data object is created. */
  createdAt?: string;
  /** Defines the `vendor.created` event data structure. */
  data?: VendorCreatedEventData;
};

export const vendorCreatedEventSchema: Schema<VendorCreatedEvent> = s.object<VendorCreatedEvent>({
  merchantId: s.optionalNullable(s.string()),
  locationId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => vendorCreatedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    locationId: "location_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
