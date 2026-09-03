import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { searchEventsQuerySchema, type SearchEventsQuery } from "./search-events-query.js";

export type SearchEventsRequest = {
  cursor?: string;
  limit?: number;
  query?: SearchEventsQuery;
};

export const searchEventsRequestSchema: Schema<SearchEventsRequest> = s.object<SearchEventsRequest>({
  cursor: s.optional(s.string()),
  limit: s.optional(s.number()),
  query: s.optional(s.lazy(() => searchEventsQuerySchema)),
});
