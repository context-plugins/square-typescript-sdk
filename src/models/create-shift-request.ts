import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shiftSchema, type Shift } from "./shift.js";

/** Represents a request to create a `Shift`. */
export type CreateShiftRequest = {
  /** A unique string value to ensure the idempotency of the operation. */
  idempotencyKey?: string;
  /**
   * A record of the hourly rate, start, and end times for a single work shift for an employee. This
   * might include a record of the start and end times for breaks taken during the shift.
   *
   * Deprecated at Square API version 2025-05-21. Replaced by [Timecard](entity:Timecard). See the
   * [migration notes](https://developer.squareup.com/docs/labor-api/what-it-does#migration-notes).
   */
  shift: Shift;
};

export const createShiftRequestSchema: Schema<CreateShiftRequest> = s.object<CreateShiftRequest>({
  idempotencyKey: s.optional(s.string()),
  shift: shiftSchema,
  _keysMap: {
    idempotencyKey: "idempotency_key",
  },
});
