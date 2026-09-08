import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduledShiftQuerySchema, type ScheduledShiftQuery } from "./scheduled-shift-query.js";

/** Represents a [SearchScheduledShift](api-endpoint:Labor-SearchScheduledShift) request. */
export type SearchScheduledShiftsRequest = {
  /**
   * Represents filter and sort criteria for the `query` field in a
   * [SearchScheduledShifts](api-endpoint:Labor-SearchScheduledShifts) request.
   */
  query?: ScheduledShiftQuery;
  /** The maximum number of results to return in a single response page. The default value is 50. */
  limit?: number;
  /**
   * The pagination cursor returned by the previous call to this endpoint. Provide this cursor to
   * retrieve the next page of results for your original request. For more information, see
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
};

export const searchScheduledShiftsRequestSchema: Schema<SearchScheduledShiftsRequest> =
  s.object<SearchScheduledShiftsRequest>({
    query: s.optional(s.lazy(() => scheduledShiftQuerySchema)),
    limit: s.optional(s.number()),
    cursor: s.optional(s.string()),
  });
