import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shiftQuerySchema, type ShiftQuery } from "./shift-query.js";

/** A request for a filtered and sorted set of `Shift` objects. */
export type SearchShiftsRequest = {
  /**
   * The parameters of a `Shift` search query, which includes filter and sort options.
   *
   * Deprecated at Square API version 2025-05-21. See the [migration
   * notes](https://developer.squareup.com/docs/labor-api/what-it-does#migration-notes).
   */
  query?: ShiftQuery;
  /** The number of resources in a page (200 by default). */
  limit?: number;
  /** An opaque cursor for fetching the next page. */
  cursor?: string;
};

export const searchShiftsRequestSchema: Schema<SearchShiftsRequest> = s.object<SearchShiftsRequest>({
  query: s.optional(s.lazy(() => shiftQuerySchema)),
  limit: s.optional(s.int()),
  cursor: s.optional(s.string()),
});
