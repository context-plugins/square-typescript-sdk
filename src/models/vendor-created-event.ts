import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { vendorCreatedEventDataSchema, type VendorCreatedEventData } from "./vendor-created-event-data.js";

export type VendorCreatedEvent = {
  merchantId?: string | null;
  locationId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
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
