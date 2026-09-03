import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  batchRetrieveInventoryChangesSortFieldSchema,
  type BatchRetrieveInventoryChangesSortField,
} from "./batch-retrieve-inventory-changes-sort-field.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";

export type BatchRetrieveInventoryChangesSort = {
  field?: BatchRetrieveInventoryChangesSortField;
  order?: SortOrder;
};

export const batchRetrieveInventoryChangesSortSchema: Schema<BatchRetrieveInventoryChangesSort> =
  s.object<BatchRetrieveInventoryChangesSort>({
    field: s.optional(s.lazy(() => batchRetrieveInventoryChangesSortFieldSchema)),
    order: s.optional(s.lazy(() => sortOrderSchema)),
  });
