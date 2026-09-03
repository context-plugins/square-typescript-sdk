import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ShiftWorkdayMatcher = {
  StartAt: "START_AT",
  EndAt: "END_AT",
  Intersection: "INTERSECTION",
} as const;
export type ShiftWorkdayMatcher =
  | (typeof ShiftWorkdayMatcher)[keyof typeof ShiftWorkdayMatcher]
  | (string & {});

export const shiftWorkdayMatcherSchema: EnumSchema<ShiftWorkdayMatcher> =
  s.enumOf<ShiftWorkdayMatcher>(ShiftWorkdayMatcher);
