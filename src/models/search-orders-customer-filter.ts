import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SearchOrdersCustomerFilter = {
  customerIds?: string[] | null;
};

export const searchOrdersCustomerFilterSchema: Schema<SearchOrdersCustomerFilter> =
  s.object<SearchOrdersCustomerFilter>({
    customerIds: s.optionalNullable(s.array(s.string())),
    _keysMap: {
      customerIds: "customer_ids",
    },
  });
