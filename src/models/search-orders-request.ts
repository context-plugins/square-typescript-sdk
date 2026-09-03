import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { searchOrdersQuerySchema, type SearchOrdersQuery } from "./search-orders-query.js";

export type SearchOrdersRequest = {
  locationIds?: string[];
  cursor?: string;
  query?: SearchOrdersQuery;
  limit?: number;
  returnEntries?: boolean;
};

export const searchOrdersRequestSchema: Schema<SearchOrdersRequest> = s.object<SearchOrdersRequest>({
  locationIds: s.optional(s.array(s.string())),
  cursor: s.optional(s.string()),
  query: s.optional(s.lazy(() => searchOrdersQuerySchema)),
  limit: s.optional(s.number()),
  returnEntries: s.optional(s.boolean()),
  _keysMap: {
    locationIds: "location_ids",
    returnEntries: "return_entries",
  },
});
