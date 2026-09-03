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

export type SearchOrdersFilter = {
  stateFilter?: SearchOrdersStateFilter;
  dateTimeFilter?: SearchOrdersDateTimeFilter;
  fulfillmentFilter?: SearchOrdersFulfillmentFilter;
  sourceFilter?: SearchOrdersSourceFilter;
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
