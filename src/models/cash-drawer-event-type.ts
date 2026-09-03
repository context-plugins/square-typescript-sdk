import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CashDrawerEventType = {
  NoSale: "NO_SALE",
  CashTenderPayment: "CASH_TENDER_PAYMENT",
  OtherTenderPayment: "OTHER_TENDER_PAYMENT",
  CashTenderCancelledPayment: "CASH_TENDER_CANCELLED_PAYMENT",
  OtherTenderCancelledPayment: "OTHER_TENDER_CANCELLED_PAYMENT",
  CashTenderRefund: "CASH_TENDER_REFUND",
  OtherTenderRefund: "OTHER_TENDER_REFUND",
  PaidIn: "PAID_IN",
  PaidOut: "PAID_OUT",
} as const;
export type CashDrawerEventType =
  | (typeof CashDrawerEventType)[keyof typeof CashDrawerEventType]
  | (string & {});

export const cashDrawerEventTypeSchema: EnumSchema<CashDrawerEventType> =
  s.enumOf<CashDrawerEventType>(CashDrawerEventType);
