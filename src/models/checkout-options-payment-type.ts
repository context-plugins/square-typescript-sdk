import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CheckoutOptionsPaymentType = {
  CardPresent: "CARD_PRESENT",
  ManualCardEntry: "MANUAL_CARD_ENTRY",
  FelicaId: "FELICA_ID",
  FelicaQuicpay: "FELICA_QUICPAY",
  FelicaTransportationGroup: "FELICA_TRANSPORTATION_GROUP",
  FelicaAll: "FELICA_ALL",
  Paypay: "PAYPAY",
  QrCode: "QR_CODE",
} as const;
export type CheckoutOptionsPaymentType =
  | (typeof CheckoutOptionsPaymentType)[keyof typeof CheckoutOptionsPaymentType]
  | (string & {});

export const checkoutOptionsPaymentTypeSchema: EnumSchema<CheckoutOptionsPaymentType> =
  s.enumOf<CheckoutOptionsPaymentType>(CheckoutOptionsPaymentType);
