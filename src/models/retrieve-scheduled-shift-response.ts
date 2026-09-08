import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { scheduledShiftSchema, type ScheduledShift } from "./scheduled-shift.js";

/**
 * Represents a [RetrieveScheduledShift](api-endpoint:Labor-RetrieveScheduledShift) response. Either
 * `scheduled_shift` or `errors` is present in the response.
 */
export type RetrieveScheduledShiftResponse = {
  /**
   * Represents a specific time slot in a work schedule. This object is used to manage the lifecycle
   * of a scheduled shift from the draft to published state. A scheduled shift contains the latest
   * draft shift details and current published shift details.
   */
  scheduledShift?: ScheduledShift;
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const retrieveScheduledShiftResponseSchema: Schema<RetrieveScheduledShiftResponse> =
  s.object<RetrieveScheduledShiftResponse>({
    scheduledShift: s.optional(s.lazy(() => scheduledShiftSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      scheduledShift: "scheduled_shift",
    },
  });
