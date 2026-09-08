import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerFilterSchema, type CustomerFilter } from "./customer-filter.js";
import { customerSortSchema, type CustomerSort } from "./customer-sort.js";

/**
 * Represents filtering and sorting criteria for a
 * [SearchCustomers](api-endpoint:Customers-SearchCustomers) request.
 */
export type CustomerQuery = {
  /**
   * Represents the filtering criteria in a [search query](entity:CustomerQuery) that defines how to
   * filter customer profiles returned in [SearchCustomers](api-endpoint:Customers-SearchCustomers)
   * results.
   */
  filter?: CustomerFilter;
  /**
   * Represents the sorting criteria in a [search query](entity:CustomerQuery) that defines how to
   * sort customer profiles returned in [SearchCustomers](api-endpoint:Customers-SearchCustomers)
   * results.
   */
  sort?: CustomerSort;
};

export const customerQuerySchema: Schema<CustomerQuery> = s.object<CustomerQuery>({
  filter: s.optional(s.lazy(() => customerFilterSchema)),
  sort: s.optional(s.lazy(() => customerSortSchema)),
});
