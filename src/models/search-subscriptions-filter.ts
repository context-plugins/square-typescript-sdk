import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Represents a set of query expressions (filters) to narrow the scope of targeted subscriptions
 * returned by the [SearchSubscriptions](api-endpoint:Subscriptions-SearchSubscriptions) endpoint.
 */
export type SearchSubscriptionsFilter = {
  /** A filter to select subscriptions based on the subscribing customer IDs. */
  customerIds?: string[] | null;
  /** A filter to select subscriptions based on the location. */
  locationIds?: string[] | null;
  /** A filter to select subscriptions based on the source application. */
  sourceNames?: string[] | null;
};

export const searchSubscriptionsFilterSchema: Schema<SearchSubscriptionsFilter> =
  s.object<SearchSubscriptionsFilter>({
    customerIds: s.optionalNullable(s.array(s.string())),
    locationIds: s.optionalNullable(s.array(s.string())),
    sourceNames: s.optionalNullable(s.array(s.string())),
    _keysMap: {
      customerIds: "customer_ids",
      locationIds: "location_ids",
      sourceNames: "source_names",
    },
  });
