import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the `status` of `Shift` records to be returned.
 *
 * Deprecated at Square API version 2025-05-21. See the [migration
 * notes](https://developer.squareup.com/docs/labor-api/what-it-does#migration-notes).
 */
export const ShiftFilterStatus = {
  /** Shifts that have been started and not ended. */
  Open: "OPEN",
  /** Shifts that have been started and ended. */
  Closed: "CLOSED",
} as const;
export type ShiftFilterStatus = (typeof ShiftFilterStatus)[keyof typeof ShiftFilterStatus] | (string & {});

export const shiftFilterStatusSchema: EnumSchema<ShiftFilterStatus> =
  s.enumOf<ShiftFilterStatus>(ShiftFilterStatus);
