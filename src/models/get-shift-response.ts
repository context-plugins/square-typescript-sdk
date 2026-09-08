import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { shiftSchema, type Shift } from "./shift.js";

/**
 * A response to a request to get a `Shift`. The response contains the requested `Shift` object and
 * might contain a set of `Error` objects if the request resulted in errors.
 */
export type GetShiftResponse = {
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

export const getShiftResponseSchema: Schema<GetShiftResponse> = s.object<GetShiftResponse>({
  shift: s.optional(s.lazy(() => shiftSchema)),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
