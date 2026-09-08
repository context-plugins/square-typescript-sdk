import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the action for Square to take for processing the invoice. For example, email the
 * invoice, charge a customer's card on file, or do nothing. DEPRECATED at version 2021-01-21. The
 * corresponding `request_method` field is replaced by the `Invoice.delivery_method` and
 * `InvoicePaymentRequest.automatic_payment_source` fields.
 */
export const InvoiceRequestMethod = {
  /**
   * Directs Square to send invoices, reminders, and receipts to the customer using email. Square
   * sends the invoice after it is published (either immediately or at the `scheduled_at` time, if
   * specified in the [invoice](entity:Invoice)).
   */
  Email: "EMAIL",
  /**
   * Directs Square to charge the card on file on the `due_date` specified in the payment request
   * and to use email to send invoices, reminders, and receipts.
   */
  ChargeCardOnFile: "CHARGE_CARD_ON_FILE",
  /**
   * Directs Square to take no specific action on the invoice. In this case, the seller (or the
   * application developer) follows up with the customer for payment. For example, a seller might
   * collect a payment in the Seller Dashboard or use the Point of Sale (POS) application. The
   * seller might also share the URL of the Square-hosted invoice page (`public_url`) with the
   * customer requesting payment.
   */
  ShareManually: "SHARE_MANUALLY",
  /**
   * Directs Square to charge the customer's bank account on file and to use email to send invoices,
   * reminders, and receipts. The customer must approve the payment.
   *
   * The bank on file payment method applies only to invoices that sellers create in the Seller
   * Dashboard or other Square product. The bank account is provided by the customer during the
   * payment flow. You cannot set `CHARGE_BANK_ON_FILE` as a request method using the Invoices API.
   */
  ChargeBankOnFile: "CHARGE_BANK_ON_FILE",
  /**
   * Directs Square to send invoices and receipts to the customer using SMS (text message). Square
   * sends the invoice after it is published (either immediately or at the `scheduled_at` time, if
   * specified in the [invoice](entity:Invoice)).
   *
   * You cannot set `SMS` as a request method using the Invoices API.
   */
  Sms: "SMS",
  /**
   * Directs Square to charge the card on file on the `due_date` specified in the payment request
   * and to use SMS (text message) to send invoices and receipts.
   *
   * You cannot set `SMS_CHARGE_CARD_ON_FILE` as a request method using the Invoices API.
   */
  SmsChargeCardOnFile: "SMS_CHARGE_CARD_ON_FILE",
  /**
   * Directs Square to charge the customer's bank account on file and to use SMS (text message) to
   * send invoices and receipts. The customer must approve the payment.
   *
   * The bank on file payment method applies only to invoices that sellers create in the Seller
   * Dashboard or other Square product. The bank account is provided by the customer during the
   * payment flow. You cannot set `SMS_CHARGE_BANK_ON_FILE` as a request method using the Invoices
   * API.
   */
  SmsChargeBankOnFile: "SMS_CHARGE_BANK_ON_FILE",
} as const;
export type InvoiceRequestMethod =
  | (typeof InvoiceRequestMethod)[keyof typeof InvoiceRequestMethod]
  | (string & {});

export const invoiceRequestMethodSchema: EnumSchema<InvoiceRequestMethod> =
  s.enumOf<InvoiceRequestMethod>(InvoiceRequestMethod);
