import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomerCreatedEventEventContextMerge = {
  fromCustomerIds?: string[] | null;
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
