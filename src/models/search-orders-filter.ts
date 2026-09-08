import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  searchOrdersCustomerFilterSchema,
  type SearchOrdersCustomerFilter,
} from "./search-orders-customer-filter.js";
import {
  searchOrdersDateTimeFilterSchema,
  type SearchOrdersDateTimeFilter,
} from "./search-orders-date-time-filter.js";
import {
  searchOrdersFulfillmentFilterSchema,
  type SearchOrdersFulfillmentFilter,
} from "./search-orders-fulfillment-filter.js";
import {
  searchOrdersSourceFilterSchema,
  type SearchOrdersSourceFilter,
} from "./search-orders-source-filter.js";
import { searchOrdersStateFilterSchema, type SearchOrdersStateFilter } from "./search-orders-state-filter.js";

/** Filtering criteria to use for a `SearchOrders` request. Multiple filters are ANDed together. */
export type SearchOrdersFilter = {
  /** Filter by the current order `state`. */
  stateFilter?: SearchOrdersStateFilter;
  /**
   * Filter for `Order` objects based on whether their `CREATED_AT`, `CLOSED_AT`, or `UPDATED_AT`
   * timestamps fall within a specified time range. You can specify the time range and which
   * timestamp to filter for. You can filter for only one time range at a time.
   *
   * For each time range, the start time and end time are inclusive. If the end time is absent, it
   * defaults to the time of the first request for the cursor.
   *
   * __Important:__ If you use the `DateTimeFilter` in a `SearchOrders` query, you must set the
   * `sort_field` in [OrdersSort](entity:SearchOrdersSort) to the same field you filter for. For
   * example, if you set the `CLOSED_AT` field in `DateTimeFilter`, you must set the `sort_field` in
   * `SearchOrdersSort` to `CLOSED_AT`. Otherwise, `SearchOrders` throws an error. [Learn more about
   * filtering orders by time
   * range.](https://developer.squareup.com/docs/orders-api/manage-orders/search-orders#important-note-about-filtering-orders-by-time-range)
   */
  dateTimeFilter?: SearchOrdersDateTimeFilter;
  /** Filter based on [order fulfillment](entity:Fulfillment) information. */
  fulfillmentFilter?: SearchOrdersFulfillmentFilter;
  /** A filter based on order `source` information. */
  sourceFilter?: SearchOrdersSourceFilter;
  /**
   * A filter based on the order `customer_id` and any tender `customer_id` associated with the
   * order. It does not filter based on the [FulfillmentRecipient](entity:FulfillmentRecipient)
   * `customer_id`.
   */
  customerFilter?: SearchOrdersCustomerFilter;
};

export const searchOrdersFilterSchema: Schema<SearchOrdersFilter> = s.object<SearchOrdersFilter>({
  stateFilter: s.optional(s.lazy(() => searchOrdersStateFilterSchema)),
  dateTimeFilter: s.optional(s.lazy(() => searchOrdersDateTimeFilterSchema)),
  fulfillmentFilter: s.optional(s.lazy(() => searchOrdersFulfillmentFilterSchema)),
  sourceFilter: s.optional(s.lazy(() => searchOrdersSourceFilterSchema)),
  customerFilter: s.optional(s.lazy(() => searchOrdersCustomerFilterSchema)),
  _keysMap: {
    stateFilter: "state_filter",
    dateTimeFilter: "date_time_filter",
    fulfillmentFilter: "fulfillment_filter",
    sourceFilter: "source_filter",
    customerFilter: "customer_filter",
  },
});
