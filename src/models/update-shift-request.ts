import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shiftSchema, type Shift } from "./shift.js";

/** A request to update a `Shift` object. */
export type UpdateShiftRequest = {
  /**
   * A record of the hourly rate, start, and end times for a single work shift for an employee. This
   * might include a record of the start and end times for breaks taken during the shift.
   *
   * Deprecated at Square API version 2025-05-21. Replaced by [Timecard](entity:Timecard). See the
   * [migration notes](https://developer.squareup.com/docs/labor-api/what-it-does#migration-notes).
   */
  shift: Shift;
};

export const updateShiftRequestSchema: Schema<UpdateShiftRequest> = s.object<UpdateShiftRequest>({
  shift: shiftSchema,
});
