import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";
import { transferOrderSortFieldSchema, type TransferOrderSortField } from "./transfer-order-sort-field.js";

export type TransferOrderSort = {
  field?: TransferOrderSortField;
  order?: SortOrder;
};

export const transferOrderSortSchema: Schema<TransferOrderSort> = s.object<TransferOrderSort>({
  field: s.optional(s.lazy(() => transferOrderSortFieldSchema)),
  order: s.optional(s.lazy(() => sortOrderSchema)),
});
