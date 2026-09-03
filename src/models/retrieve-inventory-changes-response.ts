import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { inventoryChangeSchema, type InventoryChange } from "./inventory-change.js";

export type RetrieveInventoryChangesResponse = {
  errors?: Error[];
  changes?: InventoryChange[];
  cursor?: string;
};

export const retrieveInventoryChangesResponseSchema: Schema<RetrieveInventoryChangesResponse> =
  s.object<RetrieveInventoryChangesResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    changes: s.optional(s.array(s.lazy(() => inventoryChangeSchema))),
    cursor: s.optional(s.string()),
  });
