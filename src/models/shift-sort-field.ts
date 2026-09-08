import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Enumerates the `Shift` fields to sort on.
 *
 * Deprecated at Square API version 2025-05-21. See the [migration
 * notes](https://developer.squareup.com/docs/labor-api/what-it-does#migration-notes).
 */
export const ShiftSortField = {
  /** The start date/time of a `Shift` */
  StartAt: "START_AT",
  /** The end date/time of a `Shift` */
  EndAt: "END_AT",
  /** The date/time that a `Shift` is created */
  CreatedAt: "CREATED_AT",
  /** The most recent date/time that a `Shift` is updated */
  UpdatedAt: "UPDATED_AT",
} as const;
export type ShiftSortField = (typeof ShiftSortField)[keyof typeof ShiftSortField] | (string & {});

export const shiftSortFieldSchema: EnumSchema<ShiftSortField> = s.enumOf<ShiftSortField>(ShiftSortField);
