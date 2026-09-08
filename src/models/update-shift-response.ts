import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { shiftSchema, type Shift } from "./shift.js";

/**
 * The response to a request to update a `Shift`. The response contains the updated `Shift` object
 * and might contain a set of `Error` objects if the request resulted in errors.
 */
export type UpdateShiftResponse = {
  /**
   * A record of the hourly rate, start, and end times for a single work shift for an employee. This
   * might include a record of the start and end times for breaks taken during the shift.
   *
   * Deprecated at Square API version 2025-05-21. Replaced by [Timecard](entity:Timecard). See the
   * [migration notes](https://developer.squareup.com/docs/labor-api/what-it-does#migration-notes).
   */
  shift?: Shift;
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const updateShiftResponseSchema: Schema<UpdateShiftResponse> = s.object<UpdateShiftResponse>({
  shift: s.optional(s.lazy(() => shiftSchema)),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
