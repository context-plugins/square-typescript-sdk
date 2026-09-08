import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TenderBuyNowPayLaterDetailsStatus = {
  /** The buy now pay later payment has been authorized but not yet captured. */
  Authorized: "AUTHORIZED",
  /** The buy now pay later payment was authorized and subsequently captured (i.e., completed). */
  Captured: "CAPTURED",
  /** The buy now pay later payment was authorized and subsequently voided (i.e., canceled). */
  Voided: "VOIDED",
  /** The buy now pay later payment failed. */
  Failed: "FAILED",
} as const;
export type TenderBuyNowPayLaterDetailsStatus =
  | (typeof TenderBuyNowPayLaterDetailsStatus)[keyof typeof TenderBuyNowPayLaterDetailsStatus]
  | (string & {});

export const tenderBuyNowPayLaterDetailsStatusSchema: EnumSchema<TenderBuyNowPayLaterDetailsStatus> =
  s.enumOf<TenderBuyNowPayLaterDetailsStatus>(TenderBuyNowPayLaterDetailsStatus);
