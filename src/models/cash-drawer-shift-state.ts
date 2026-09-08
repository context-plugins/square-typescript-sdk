import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current state of a cash drawer shift. */
export const CashDrawerShiftState = {
  /** An open cash drawer shift. */
  Open: "OPEN",
  /** A cash drawer shift that is ended but has not yet had an employee content audit. */
  Ended: "ENDED",
  /**
   * An ended cash drawer shift that is closed with a completed employee content audit and recorded
   * result.
   */
  Closed: "CLOSED",
} as const;
export type CashDrawerShiftState =
  | (typeof CashDrawerShiftState)[keyof typeof CashDrawerShiftState]
  | (string & {});

export const cashDrawerShiftStateSchema: EnumSchema<CashDrawerShiftState> =
  s.enumOf<CashDrawerShiftState>(CashDrawerShiftState);
