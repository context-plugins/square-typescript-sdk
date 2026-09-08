import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timecardQuerySchema, type TimecardQuery } from "./timecard-query.js";

/** A request for a filtered and sorted set of `Timecard` objects. */
export type SearchTimecardsRequest = {
  /** The parameters of a `Timecard` search query, which includes filter and sort options. */
  query?: TimecardQuery;
  /** The number of resources in a page (200 by default). */
  limit?: number;
  /** An opaque cursor for fetching the next page. */
  cursor?: string;
};

export const searchTimecardsRequestSchema: Schema<SearchTimecardsRequest> = s.object<SearchTimecardsRequest>({
  query: s.optional(s.lazy(() => timecardQuerySchema)),
  limit: s.optional(s.number()),
  cursor: s.optional(s.string()),
});
