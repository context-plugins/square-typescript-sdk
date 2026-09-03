import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ShiftSortField = {
  StartAt: "START_AT",
  EndAt: "END_AT",
  CreatedAt: "CREATED_AT",
  UpdatedAt: "UPDATED_AT",
} as const;
export type ShiftSortField = (typeof ShiftSortField)[keyof typeof ShiftSortField] | (string & {});

export const shiftSortFieldSchema: EnumSchema<ShiftSortField> = s.enumOf<ShiftSortField>(ShiftSortField);
