import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerSortFieldSchema, type CustomerSortField } from "./customer-sort-field.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";

/**
 * Represents the sorting criteria in a [search query](entity:CustomerQuery) that defines how to
 * sort customer profiles returned in [SearchCustomers](api-endpoint:Customers-SearchCustomers)
 * results.
 */
export type CustomerSort = {
  /** Specifies customer attributes as the sort key to customer profiles returned from a search. */
  field?: CustomerSortField;
  /**
   * The order (e.g., chronological or alphabetical) in which results from a request are returned.
   */
  order?: SortOrder;
};

export const customerSortSchema: Schema<CustomerSort> = s.object<CustomerSort>({
  field: s.optional(s.lazy(() => customerSortFieldSchema)),
  order: s.optional(s.lazy(() => sortOrderSchema)),
});
