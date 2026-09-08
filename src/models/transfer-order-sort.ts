import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";
import { transferOrderSortFieldSchema, type TransferOrderSortField } from "./transfer-order-sort-field.js";

/** Sort configuration for search results */
export type TransferOrderSort = {
  /**
   * Fields that can be used for sorting [TransferOrder](entity:TransferOrder)s in search results.
   * Used with [SearchTransferOrders](api-endpoint:TransferOrders-SearchTransferOrders) to control
   * the order of returned results.
   */
  field?: TransferOrderSortField;
  /**
   * The order (e.g., chronological or alphabetical) in which results from a request are returned.
   */
  order?: SortOrder;
};

export const transferOrderSortSchema: Schema<TransferOrderSort> = s.object<TransferOrderSort>({
  field: s.optional(s.lazy(() => transferOrderSortFieldSchema)),
  order: s.optional(s.lazy(() => sortOrderSchema)),
});
