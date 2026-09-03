import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerFilterSchema, type CustomerFilter } from "./customer-filter.js";
import { customerSortSchema, type CustomerSort } from "./customer-sort.js";

export type CustomerQuery = {
  filter?: CustomerFilter;
  sort?: CustomerSort;
};

export const customerQuerySchema: Schema<CustomerQuery> = s.object<CustomerQuery>({
  filter: s.optional(s.lazy(() => customerFilterSchema)),
  sort: s.optional(s.lazy(() => customerSortSchema)),
});
