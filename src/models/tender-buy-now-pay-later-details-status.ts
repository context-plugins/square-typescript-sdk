import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TenderBuyNowPayLaterDetailsStatus = {
  Authorized: "AUTHORIZED",
  Captured: "CAPTURED",
  Voided: "VOIDED",
  Failed: "FAILED",
} as const;
export type TenderBuyNowPayLaterDetailsStatus =
  | (typeof TenderBuyNowPayLaterDetailsStatus)[keyof typeof TenderBuyNowPayLaterDetailsStatus]
  | (string & {});

export const tenderBuyNowPayLaterDetailsStatusSchema: EnumSchema<TenderBuyNowPayLaterDetailsStatus> =
  s.enumOf<TenderBuyNowPayLaterDetailsStatus>(TenderBuyNowPayLaterDetailsStatus);
