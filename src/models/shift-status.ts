import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ShiftStatus = {
  Open: "OPEN",
  Closed: "CLOSED",
} as const;
export type ShiftStatus = (typeof ShiftStatus)[keyof typeof ShiftStatus] | (string & {});

export const shiftStatusSchema: EnumSchema<ShiftStatus> = s.enumOf<ShiftStatus>(ShiftStatus);
