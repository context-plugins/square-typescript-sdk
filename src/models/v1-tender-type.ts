import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1TenderType = {
  CreditCard: "CREDIT_CARD",
  Cash: "CASH",
  ThirdPartyCard: "THIRD_PARTY_CARD",
  NoSale: "NO_SALE",
  SquareWallet: "SQUARE_WALLET",
  SquareGiftCard: "SQUARE_GIFT_CARD",
  Unknown: "UNKNOWN",
  Other: "OTHER",
} as const;
export type V1TenderType = (typeof V1TenderType)[keyof typeof V1TenderType] | (string & {});

export const v1TenderTypeSchema: EnumSchema<V1TenderType> = s.enumOf<V1TenderType>(V1TenderType);
