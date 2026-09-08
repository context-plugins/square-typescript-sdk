import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The types of events on a CashDrawerShift. Each event type represents an employee action on the
 * actual cash drawer represented by a CashDrawerShift.
 */
export const CashDrawerEventType = {
  /**
   * Triggered when a no sale occurs on a cash drawer. A CashDrawerEvent of this type must have a
   * zero money amount.
   */
  NoSale: "NO_SALE",
  /**
   * Triggered when a cash tender payment occurs on a cash drawer. A CashDrawerEvent of this type
   * can must not have a negative amount.
   */
  CashTenderPayment: "CASH_TENDER_PAYMENT",
  /**
   * Triggered when a check, gift card, or other non-cash payment occurs on a cash drawer. A
   * CashDrawerEvent of this type must have a zero money amount.
   */
  OtherTenderPayment: "OTHER_TENDER_PAYMENT",
  /**
   * Triggered when a split tender bill is cancelled after cash has been tendered. A
   * CASH_TENDER_CANCELLED_PAYMENT should have a corresponding CASH_TENDER_PAYMENT. A
   * CashDrawerEvent of this type must not have a negative amount.
   */
  CashTenderCancelledPayment: "CASH_TENDER_CANCELLED_PAYMENT",
  /**
   * Triggered when a split tender bill is cancelled after a non-cash tender has been tendered. An
   * OTHER_TENDER_CANCELLED_PAYMENT should have a corresponding OTHER_TENDER_PAYMENT. A
   * CashDrawerEvent of this type must have a zero money amount.
   */
  OtherTenderCancelledPayment: "OTHER_TENDER_CANCELLED_PAYMENT",
  /**
   * Triggered when a cash tender refund occurs. A CashDrawerEvent of this type must not have a
   * negative amount.
   */
  CashTenderRefund: "CASH_TENDER_REFUND",
  /**
   * Triggered when an other tender refund occurs. A CashDrawerEvent of this type must have a zero
   * money amount.
   */
  OtherTenderRefund: "OTHER_TENDER_REFUND",
  /**
   * Triggered when money unrelated to a payment is added to the cash drawer. For example, an
   * employee adds coins to the drawer. A CashDrawerEvent of this type must not have a negative
   * amount.
   */
  PaidIn: "PAID_IN",
  /**
   * Triggered when money is removed from the drawer for other reasons than making change. For
   * example, an employee pays a delivery person with cash from the cash drawer. A CashDrawerEvent
   * of this type must not have a negative amount.
   */
  PaidOut: "PAID_OUT",
} as const;
export type CashDrawerEventType =
  | (typeof CashDrawerEventType)[keyof typeof CashDrawerEventType]
  | (string & {});

export const cashDrawerEventTypeSchema: EnumSchema<CashDrawerEventType> =
  s.enumOf<CashDrawerEventType>(CashDrawerEventType);
