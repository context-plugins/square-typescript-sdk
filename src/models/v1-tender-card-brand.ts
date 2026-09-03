import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1TenderCardBrand = {
  OtherBrand: "OTHER_BRAND",
  Visa: "VISA",
  MasterCard: "MASTER_CARD",
  AmericanExpress: "AMERICAN_EXPRESS",
  Discover: "DISCOVER",
  DiscoverDiners: "DISCOVER_DINERS",
  Jcb: "JCB",
  ChinaUnionpay: "CHINA_UNIONPAY",
  SquareGiftCard: "SQUARE_GIFT_CARD",
} as const;
export type V1TenderCardBrand = (typeof V1TenderCardBrand)[keyof typeof V1TenderCardBrand] | (string & {});

export const v1TenderCardBrandSchema: EnumSchema<V1TenderCardBrand> =
  s.enumOf<V1TenderCardBrand>(V1TenderCardBrand);
