import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inventoryStateSchema, type InventoryState } from "./inventory-state.js";

export type InventoryAdjustmentGroup = {
  id?: string;
  rootAdjustmentId?: string;
  fromState?: InventoryState;
  toState?: InventoryState;
};

export const inventoryAdjustmentGroupSchema: Schema<InventoryAdjustmentGroup> =
  s.object<InventoryAdjustmentGroup>({
    id: s.optional(s.string()),
    rootAdjustmentId: s.optional(s.string()),
    fromState: s.optional(s.lazy(() => inventoryStateSchema)),
    toState: s.optional(s.lazy(() => inventoryStateSchema)),
    _keysMap: {
      rootAdjustmentId: "root_adjustment_id",
      fromState: "from_state",
      toState: "to_state",
    },
  });
