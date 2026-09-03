import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  searchSubscriptionsFilterSchema,
  type SearchSubscriptionsFilter,
} from "./search-subscriptions-filter.js";

export type SearchSubscriptionsQuery = {
  filter?: SearchSubscriptionsFilter;
};

export const searchSubscriptionsQuerySchema: Schema<SearchSubscriptionsQuery> =
  s.object<SearchSubscriptionsQuery>({
    filter: s.optional(s.lazy(() => searchSubscriptionsFilterSchema)),
  });
