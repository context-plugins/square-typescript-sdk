import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  searchSubscriptionsQuerySchema,
  type SearchSubscriptionsQuery,
} from "./search-subscriptions-query.js";

/**
 * Defines input parameters in a request to the
 * [SearchSubscriptions](api-endpoint:Subscriptions-SearchSubscriptions) endpoint.
 */
export type SearchSubscriptionsRequest = {
  /**
   * When the total number of resulting subscriptions exceeds the limit of a paged response, specify
   * the cursor returned from a preceding response here to fetch the next set of results. If the
   * cursor is unset, the response contains the last page of the results.
   *
   * For more information, see
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
  /** The upper limit on the number of subscriptions to return in a paged response. */
  limit?: number;
  /**
   * Represents a query, consisting of specified query expressions, used to search for
   * subscriptions.
   */
  query?: SearchSubscriptionsQuery;
  /**
   * An option to include related information in the response.
   *
   * The supported values are:
   *
   * - `actions`: to include scheduled actions on the targeted subscriptions.
   */
  include?: string[];
};

export const searchSubscriptionsRequestSchema: Schema<SearchSubscriptionsRequest> =
  s.object<SearchSubscriptionsRequest>({
    cursor: s.optional(s.string()),
    limit: s.optional(s.number()),
    query: s.optional(s.lazy(() => searchSubscriptionsQuerySchema)),
    include: s.optional(s.array(s.string())),
  });
