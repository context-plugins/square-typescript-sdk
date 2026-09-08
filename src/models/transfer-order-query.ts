import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferOrderFilterSchema, type TransferOrderFilter } from "./transfer-order-filter.js";
import { transferOrderSortSchema, type TransferOrderSort } from "./transfer-order-sort.js";

/** Query parameters for searching transfer orders */
export type TransferOrderQuery = {
  /** Filter criteria for searching transfer orders */
  filter?: TransferOrderFilter;
  /** Sort configuration for search results */
  sort?: TransferOrderSort;
};

export const transferOrderQuerySchema: Schema<TransferOrderQuery> = s.object<TransferOrderQuery>({
  filter: s.optional(s.lazy(() => transferOrderFilterSchema)),
  sort: s.optional(s.lazy(() => transferOrderSortSchema)),
});
