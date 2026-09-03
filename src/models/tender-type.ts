import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TenderType = {
  Card: "CARD",
  Cash: "CASH",
  ThirdPartyCard: "THIRD_PARTY_CARD",
  SquareGiftCard: "SQUARE_GIFT_CARD",
  NoSale: "NO_SALE",
  BankAccount: "BANK_ACCOUNT",
  Wallet: "WALLET",
  BuyNowPayLater: "BUY_NOW_PAY_LATER",
  SquareAccount: "SQUARE_ACCOUNT",
  Other: "OTHER",
} as const;
export type TenderType = (typeof TenderType)[keyof typeof TenderType] | (string & {});

export const tenderTypeSchema: EnumSchema<TenderType> = s.enumOf<TenderType>(TenderType);
