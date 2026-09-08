import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TenderSquareAccountDetailsStatus = {
  /** The Square Account payment has been authorized but not yet captured. */
  Authorized: "AUTHORIZED",
  /** The Square Account payment was authorized and subsequently captured (i.e., completed). */
  Captured: "CAPTURED",
  /** The Square Account payment was authorized and subsequently voided (i.e., canceled). */
  Voided: "VOIDED",
  /** The Square Account payment failed. */
  Failed: "FAILED",
} as const;
export type TenderSquareAccountDetailsStatus =
  | (typeof TenderSquareAccountDetailsStatus)[keyof typeof TenderSquareAccountDetailsStatus]
  | (string & {});

export const tenderSquareAccountDetailsStatusSchema: EnumSchema<TenderSquareAccountDetailsStatus> =
  s.enumOf<TenderSquareAccountDetailsStatus>(TenderSquareAccountDetailsStatus);
