import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TenderBuyNowPayLaterDetailsBrand = {
  OtherBrand: "OTHER_BRAND",
  Afterpay: "AFTERPAY",
} as const;
export type TenderBuyNowPayLaterDetailsBrand =
  | (typeof TenderBuyNowPayLaterDetailsBrand)[keyof typeof TenderBuyNowPayLaterDetailsBrand]
  | (string & {});

export const tenderBuyNowPayLaterDetailsBrandSchema: EnumSchema<TenderBuyNowPayLaterDetailsBrand> =
  s.enumOf<TenderBuyNowPayLaterDetailsBrand>(TenderBuyNowPayLaterDetailsBrand);
