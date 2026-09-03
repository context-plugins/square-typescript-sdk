import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  inventoryCountUpdatedEventObjectSchema,
  type InventoryCountUpdatedEventObject,
} from "./inventory-count-updated-event-object.js";

export type InventoryCountUpdatedEventData = {
  type?: string | null;
  id?: string;
  object?: InventoryCountUpdatedEventObject;
};

export const inventoryCountUpdatedEventDataSchema: Schema<InventoryCountUpdatedEventData> =
  s.object<InventoryCountUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => inventoryCountUpdatedEventObjectSchema)),
  });
