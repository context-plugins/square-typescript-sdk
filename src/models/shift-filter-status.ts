import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ShiftFilterStatus = {
  Open: "OPEN",
  Closed: "CLOSED",
} as const;
export type ShiftFilterStatus = (typeof ShiftFilterStatus)[keyof typeof ShiftFilterStatus] | (string & {});

export const shiftFilterStatusSchema: EnumSchema<ShiftFilterStatus> =
  s.enumOf<ShiftFilterStatus>(ShiftFilterStatus);
