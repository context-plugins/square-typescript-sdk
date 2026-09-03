import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { inventoryPhysicalCountSchema, type InventoryPhysicalCount } from "./inventory-physical-count.js";

export type RetrieveInventoryPhysicalCountResponse = {
  errors?: Error[];
  count?: InventoryPhysicalCount;
};

export const retrieveInventoryPhysicalCountResponseSchema: Schema<RetrieveInventoryPhysicalCountResponse> =
  s.object<RetrieveInventoryPhysicalCountResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    count: s.optional(s.lazy(() => inventoryPhysicalCountSchema)),
  });
