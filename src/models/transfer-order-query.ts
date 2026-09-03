import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferOrderFilterSchema, type TransferOrderFilter } from "./transfer-order-filter.js";
import { transferOrderSortSchema, type TransferOrderSort } from "./transfer-order-sort.js";

export type TransferOrderQuery = {
  filter?: TransferOrderFilter;
  sort?: TransferOrderSort;
};

export const transferOrderQuerySchema: Schema<TransferOrderQuery> = s.object<TransferOrderQuery>({
  filter: s.optional(s.lazy(() => transferOrderFilterSchema)),
  sort: s.optional(s.lazy(() => transferOrderSortSchema)),
});
