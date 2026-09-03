import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TenderSquareAccountDetailsStatus = {
  Authorized: "AUTHORIZED",
  Captured: "CAPTURED",
  Voided: "VOIDED",
  Failed: "FAILED",
} as const;
export type TenderSquareAccountDetailsStatus =
  | (typeof TenderSquareAccountDetailsStatus)[keyof typeof TenderSquareAccountDetailsStatus]
  | (string & {});

export const tenderSquareAccountDetailsStatusSchema: EnumSchema<TenderSquareAccountDetailsStatus> =
  s.enumOf<TenderSquareAccountDetailsStatus>(TenderSquareAccountDetailsStatus);
