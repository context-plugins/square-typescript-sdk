import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates a tender's type. */
export const TenderType = {
  /** A credit card. */
  Card: "CARD",
  /** Cash. */
  Cash: "CASH",
  /**
   * A credit card processed with a card processor other than Square.
   *
   * This value applies only to merchants in countries where Square does not yet provide card
   * processing.
   */
  ThirdPartyCard: "THIRD_PARTY_CARD",
  /** A Square gift card. */
  SquareGiftCard: "SQUARE_GIFT_CARD",
  /** This tender represents the register being opened for a "no sale" event. */
  NoSale: "NO_SALE",
  /** A bank account payment. */
  BankAccount: "BANK_ACCOUNT",
  /**
   * A payment from a digital wallet, e.g. Cash App, Paypay, Rakuten Pay, Au Pay, D Barai, Merpay,
   * Wechat Pay, Alipay.
   *
   * Note: Some "digital wallets", including Google Pay and Apple Pay, facilitate card payments.
   * Those payments have the `CARD` type.
   */
  Wallet: "WALLET",
  /** A Buy Now Pay Later payment. */
  BuyNowPayLater: "BUY_NOW_PAY_LATER",
  /** A Square House Account payment. */
  SquareAccount: "SQUARE_ACCOUNT",
  /** A form of tender that does not match any other value. */
  Other: "OTHER",
} as const;
export type TenderType = (typeof TenderType)[keyof typeof TenderType] | (string & {});

export const tenderTypeSchema: EnumSchema<TenderType> = s.enumOf<TenderType>(TenderType);
