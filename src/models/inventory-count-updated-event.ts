import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  inventoryCountUpdatedEventDataSchema,
  type InventoryCountUpdatedEventData,
} from "./inventory-count-updated-event-data.js";

/**
 * Published when the quantity is updated for a [CatalogItemVariation](entity:CatalogItemVariation).
 */
export type InventoryCountUpdatedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was created, in RFC 3339 format. */
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
