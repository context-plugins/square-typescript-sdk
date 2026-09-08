import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { shiftSchema, type Shift } from "./shift.js";

/**
 * The response to a request for `Shift` objects. The response contains the requested `Shift`
 * objects and might contain a set of `Error` objects if the request resulted in errors.
 */
export type SearchShiftsResponse = {
  /** Shifts. */
  shifts?: Shift[];
  /** An opaque cursor for fetching the next page. */
  cursor?: string;
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const searchShiftsResponseSchema: Schema<SearchShiftsResponse> = s.object<SearchShiftsResponse>({
  shifts: s.optional(s.array(s.lazy(() => shiftSchema))),
  cursor: s.optional(s.string()),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
