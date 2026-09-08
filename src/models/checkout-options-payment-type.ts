import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CheckoutOptionsPaymentType = {
  /** Accept credit card or debit card payments via tap, dip or swipe. */
  CardPresent: "CARD_PRESENT",
  /** Launches the manual credit or debit card entry screen for the buyer to complete. */
  ManualCardEntry: "MANUAL_CARD_ENTRY",
  /** Launches the iD checkout screen for the buyer to complete. */
  FelicaId: "FELICA_ID",
  /** Launches the QUICPay checkout screen for the buyer to complete. */
  FelicaQuicpay: "FELICA_QUICPAY",
  /** Launches the Transportation Group checkout screen for the buyer to complete. */
  FelicaTransportationGroup: "FELICA_TRANSPORTATION_GROUP",
  /**
   * Launches a checkout screen for the buyer on the Square Terminal that allows them to select a
   * specific FeliCa brand or select the check balance screen.
   */
  FelicaAll: "FELICA_ALL",
  /** Replaced by `QR_CODE`. */
  Paypay: "PAYPAY",
  /**
   * Launches Square's QR Code checkout screen for the buyer to complete. Displays a single code
   * that supports all digital wallets connected to the target Seller location (e.g. PayPay)
   */
  QrCode: "QR_CODE",
} as const;
export type CheckoutOptionsPaymentType =
  | (typeof CheckoutOptionsPaymentType)[keyof typeof CheckoutOptionsPaymentType]
  | (string & {});

export const checkoutOptionsPaymentTypeSchema: EnumSchema<CheckoutOptionsPaymentType> =
  s.enumOf<CheckoutOptionsPaymentType>(CheckoutOptionsPaymentType);
