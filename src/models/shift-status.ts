import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Enumerates the possible status of a `Shift`.
 *
 * Deprecated at Square API version 2025-05-21. See the [migration
 * notes](https://developer.squareup.com/docs/labor-api/what-it-does#migration-notes).
 */
export const ShiftStatus = {
  /** Employee started a work shift and the shift is not complete */
  Open: "OPEN",
  /** Employee started and ended a work shift. */
  Closed: "CLOSED",
} as const;
export type ShiftStatus = (typeof ShiftStatus)[keyof typeof ShiftStatus] | (string & {});

export const shiftStatusSchema: EnumSchema<ShiftStatus> = s.enumOf<ShiftStatus>(ShiftStatus);
