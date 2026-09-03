import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OrderEntry = {
  orderId?: string | null;
  version?: number;
  locationId?: string | null;
};

export const orderEntrySchema: Schema<OrderEntry> = s.object<OrderEntry>({
  orderId: s.optionalNullable(s.string()),
  version: s.optional(s.number()),
  locationId: s.optionalNullable(s.string()),
  _keysMap: {
    orderId: "order_id",
    locationId: "location_id",
  },
});
