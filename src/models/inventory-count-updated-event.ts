import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  inventoryCountUpdatedEventDataSchema,
  type InventoryCountUpdatedEventData,
} from "./inventory-count-updated-event-data.js";

export type InventoryCountUpdatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: InventoryCountUpdatedEventData;
};

export const inventoryCountUpdatedEventSchema: Schema<InventoryCountUpdatedEvent> =
  s.object<InventoryCountUpdatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => inventoryCountUpdatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
