import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the card transaction's current status. */
export const TenderCardDetailsStatus = {
  /** The card transaction has been authorized but not yet captured. */
  Authorized: "AUTHORIZED",
  /** The card transaction was authorized and subsequently captured (i.e., completed). */
  Captured: "CAPTURED",
  /** The card transaction was authorized and subsequently voided (i.e., canceled). */
  Voided: "VOIDED",
  /** The card transaction failed. */
  Failed: "FAILED",
} as const;
export type TenderCardDetailsStatus =
  | (typeof TenderCardDetailsStatus)[keyof typeof TenderCardDetailsStatus]
  | (string & {});

export const tenderCardDetailsStatusSchema: EnumSchema<TenderCardDetailsStatus> =
  s.enumOf<TenderCardDetailsStatus>(TenderCardDetailsStatus);
