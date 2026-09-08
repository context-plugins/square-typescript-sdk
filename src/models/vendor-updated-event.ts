import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { vendorUpdatedEventDataSchema, type VendorUpdatedEventData } from "./vendor-updated-event-data.js";

/** Published when a [Vendor](entity:Vendor) is updated. */
export type VendorUpdatedEvent = {
  /** The ID of a seller associated with this event. */
  merchantId?: string | null;
  /**
   * The ID of a seller location associated with this event, if the event is associated with the
   * location.
   */
  locationId?: string | null;
  /** The type of this event. The value is `"vendor.updated".` */
  type?: string | null;
  /** A unique ID for this webhoook event. */
  eventId?: string | null;
  /** The RFC 3339-formatted time when the underlying event data object is created. */
  createdAt?: string;
  /** Defines the `vendor.updated` event data structure. */
  data?: VendorUpdatedEventData;
};

export const vendorUpdatedEventSchema: Schema<VendorUpdatedEvent> = s.object<VendorUpdatedEvent>({
  merchantId: s.optionalNullable(s.string()),
  locationId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => vendorUpdatedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    locationId: "location_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
