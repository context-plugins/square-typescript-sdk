import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CardBrand = {
  OtherBrand: "OTHER_BRAND",
  Visa: "VISA",
  Mastercard: "MASTERCARD",
  AmericanExpress: "AMERICAN_EXPRESS",
  Discover: "DISCOVER",
  DiscoverDiners: "DISCOVER_DINERS",
  Jcb: "JCB",
  ChinaUnionpay: "CHINA_UNIONPAY",
  SquareGiftCard: "SQUARE_GIFT_CARD",
  SquareCapitalCard: "SQUARE_CAPITAL_CARD",
  Interac: "INTERAC",
  Eftpos: "EFTPOS",
  Felica: "FELICA",
  Ebt: "EBT",
} as const;
export type CardBrand = (typeof CardBrand)[keyof typeof CardBrand] | (string & {});

export const cardBrandSchema: EnumSchema<CardBrand> = s.enumOf<CardBrand>(CardBrand);
