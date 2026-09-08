import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { scheduledShiftSchema, type ScheduledShift } from "./scheduled-shift.js";

/**
 * Represents a [SearchScheduledShifts](api-endpoint:Labor-SearchScheduledShifts) response. Either
 * `scheduled_shifts` or `errors` is present in the response.
 */
export type SearchScheduledShiftsResponse = {
  /** A paginated list of scheduled shifts that match the query conditions. */
  scheduledShifts?: ScheduledShift[];
  /**
   * The pagination cursor used to retrieve the next page of results. This field is present only if
   * additional results are available.
   */
  cursor?: string;
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const searchScheduledShiftsResponseSchema: Schema<SearchScheduledShiftsResponse> =
  s.object<SearchScheduledShiftsResponse>({
    scheduledShifts: s.optional(s.array(s.lazy(() => scheduledShiftSchema))),
    cursor: s.optional(s.string()),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      scheduledShifts: "scheduled_shifts",
    },
  });
