import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { vendorUpdatedEventDataSchema, type VendorUpdatedEventData } from "./vendor-updated-event-data.js";

export type VendorUpdatedEvent = {
  merchantId?: string | null;
  locationId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
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
