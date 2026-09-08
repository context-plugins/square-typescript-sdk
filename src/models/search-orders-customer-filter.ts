import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A filter based on the order `customer_id` and any tender `customer_id` associated with the order.
 * It does not filter based on the [FulfillmentRecipient](entity:FulfillmentRecipient)
 * `customer_id`.
 */
export type SearchOrdersCustomerFilter = {
  /**
   * A list of customer IDs to filter by.
   *
   * Max: 10 customer ids.
   */
  customerIds?: string[] | null;
};

export const searchOrdersCustomerFilterSchema: Schema<SearchOrdersCustomerFilter> =
  s.object<SearchOrdersCustomerFilter>({
    customerIds: s.optionalNullable(s.array(s.string())),
    _keysMap: {
      customerIds: "customer_ids",
    },
  });
