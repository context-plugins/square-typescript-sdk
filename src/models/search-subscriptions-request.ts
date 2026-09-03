import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  searchSubscriptionsQuerySchema,
  type SearchSubscriptionsQuery,
} from "./search-subscriptions-query.js";

export type SearchSubscriptionsRequest = {
  cursor?: string;
  limit?: number;
  query?: SearchSubscriptionsQuery;
  include?: string[];
};

export const searchSubscriptionsRequestSchema: Schema<SearchSubscriptionsRequest> =
  s.object<SearchSubscriptionsRequest>({
    cursor: s.optional(s.string()),
    limit: s.optional(s.number()),
    query: s.optional(s.lazy(() => searchSubscriptionsQuerySchema)),
    include: s.optional(s.array(s.string())),
  });
