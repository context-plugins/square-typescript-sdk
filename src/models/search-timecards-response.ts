import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { timecardSchema, type Timecard } from "./timecard.js";

/**
 * The response to a request for `Timecard` objects. The response contains the requested `Timecard`
 * objects and might contain a set of `Error` objects if the request resulted in errors.
 */
export type SearchTimecardsResponse = {
  /** Timecards. */
  timecards?: Timecard[];
  /** An opaque cursor for fetching the next page. */
  cursor?: string;
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const searchTimecardsResponseSchema: Schema<SearchTimecardsResponse> =
  s.object<SearchTimecardsResponse>({
    timecards: s.optional(s.array(s.lazy(() => timecardSchema))),
    cursor: s.optional(s.string()),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
