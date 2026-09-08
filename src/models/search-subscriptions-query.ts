import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  searchSubscriptionsFilterSchema,
  type SearchSubscriptionsFilter,
} from "./search-subscriptions-filter.js";

/**
 * Represents a query, consisting of specified query expressions, used to search for subscriptions.
 */
export type SearchSubscriptionsQuery = {
  /**
   * Represents a set of query expressions (filters) to narrow the scope of targeted subscriptions
   * returned by the [SearchSubscriptions](api-endpoint:Subscriptions-SearchSubscriptions) endpoint.
   */
  filter?: SearchSubscriptionsFilter;
};

export const searchSubscriptionsQuerySchema: Schema<SearchSubscriptionsQuery> =
  s.object<SearchSubscriptionsQuery>({
    filter: s.optional(s.lazy(() => searchSubscriptionsFilterSchema)),
  });
