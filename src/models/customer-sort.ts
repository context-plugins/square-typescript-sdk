import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerSortFieldSchema, type CustomerSortField } from "./customer-sort-field.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";

export type CustomerSort = {
  field?: CustomerSortField;
  order?: SortOrder;
};

export const customerSortSchema: Schema<CustomerSort> = s.object<CustomerSort>({
  field: s.optional(s.lazy(() => customerSortFieldSchema)),
  order: s.optional(s.lazy(() => sortOrderSchema)),
});
