import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information about a merge operation, which creates a new customer using aggregated properties
 * from two or more existing customers.
 */
export type CustomerCreatedEventEventContextMerge = {
  /** The IDs of the existing customers that were merged and then deleted. */
  fromCustomerIds?: string[] | null;
  /** The ID of the new customer created by the merge. */
  toCustomerId?: string | null;
};

export const customerCreatedEventEventContextMergeSchema: Schema<CustomerCreatedEventEventContextMerge> =
  s.object<CustomerCreatedEventEventContextMerge>({
    fromCustomerIds: s.optionalNullable(s.array(s.string())),
    toCustomerId: s.optionalNullable(s.string()),
    _keysMap: {
      fromCustomerIds: "from_customer_ids",
      toCustomerId: "to_customer_id",
    },
  });
