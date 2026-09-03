import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CashDrawerShiftState = {
  Open: "OPEN",
  Ended: "ENDED",
  Closed: "CLOSED",
} as const;
export type CashDrawerShiftState =
  | (typeof CashDrawerShiftState)[keyof typeof CashDrawerShiftState]
  | (string & {});

export const cashDrawerShiftStateSchema: EnumSchema<CashDrawerShiftState> =
  s.enumOf<CashDrawerShiftState>(CashDrawerShiftState);
