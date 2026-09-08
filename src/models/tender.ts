import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionalRecipientSchema, type AdditionalRecipient } from "./additional-recipient.js";
import { moneySchema, type Money } from "./money.js";
import {
  tenderBankAccountDetailsSchema,
  type TenderBankAccountDetails,
} from "./tender-bank-account-details.js";
import {
  tenderBuyNowPayLaterDetailsSchema,
  type TenderBuyNowPayLaterDetails,
} from "./tender-buy-now-pay-later-details.js";
import { tenderCardDetailsSchema, type TenderCardDetails } from "./tender-card-details.js";
import { tenderCashDetailsSchema, type TenderCashDetails } from "./tender-cash-details.js";
import {
  tenderSquareAccountDetailsSchema,
  type TenderSquareAccountDetails,
} from "./tender-square-account-details.js";
import { tenderTypeSchema, type TenderType } from "./tender-type.js";

/** Represents a tender (i.e., a method of payment) used in a Square transaction. */
export type Tender = {
  /** The tender's unique ID. It is the associated payment ID. */
  id?: string;
  /** The ID of the transaction's associated location. */
  locationId?: string | null;
  /** The ID of the tender's associated transaction. */
  transactionId?: string | null;
  /** The timestamp for when the tender was created, in RFC 3339 format. */
  createdAt?: string;
  /** An optional note associated with the tender at the time of payment. */
  note?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  amountMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  tipMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  processingFeeMoney?: Money;
  /**
   * If the tender is associated with a customer or represents a customer's card on file, this is
   * the ID of the associated customer.
   */
  customerId?: string | null;
  /** Indicates a tender's type. */
  type: TenderType;
  /** Represents additional details of a tender with `type` `CARD` or `SQUARE_GIFT_CARD` */
  cardDetails?: TenderCardDetails;
  /** Represents the details of a tender with `type` `CASH`. */
  cashDetails?: TenderCashDetails;
  /**
   * Represents the details of a tender with `type` `BANK_ACCOUNT`.
   *
   * See [BankAccountPaymentDetails](entity:BankAccountPaymentDetails) for more exposed details of a
   * bank account payment.
   */
  bankAccountDetails?: TenderBankAccountDetails;
  /** Represents the details of a tender with `type` `BUY_NOW_PAY_LATER`. */
  buyNowPayLaterDetails?: TenderBuyNowPayLaterDetails;
  /** Represents the details of a tender with `type` `SQUARE_ACCOUNT`. */
  squareAccountDetails?: TenderSquareAccountDetails;
  /**
   * Additional recipients (other than the merchant) receiving a portion of this tender. For
   * example, fees assessed on the purchase by a third party integration.
   */
  additionalRecipients?: AdditionalRecipient[] | null;
  /**
   * The ID of the [Payment](entity:Payment) that corresponds to this tender. This value is only
   * present for payments created with the v2 Payments API.
   */
  paymentId?: string | null;
};

export const tenderSchema: Schema<Tender> = s.object<Tender>({
  id: s.optional(s.string()),
  locationId: s.optionalNullable(s.string()),
  transactionId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  note: s.optionalNullable(s.string()),
  amountMoney: s.optional(s.lazy(() => moneySchema)),
  tipMoney: s.optional(s.lazy(() => moneySchema)),
  processingFeeMoney: s.optional(s.lazy(() => moneySchema)),
  customerId: s.optionalNullable(s.string()),
  type: tenderTypeSchema,
  cardDetails: s.optional(s.lazy(() => tenderCardDetailsSchema)),
  cashDetails: s.optional(s.lazy(() => tenderCashDetailsSchema)),
  bankAccountDetails: s.optional(s.lazy(() => tenderBankAccountDetailsSchema)),
  buyNowPayLaterDetails: s.optional(s.lazy(() => tenderBuyNowPayLaterDetailsSchema)),
  squareAccountDetails: s.optional(s.lazy(() => tenderSquareAccountDetailsSchema)),
  additionalRecipients: s.optionalNullable(s.array(s.lazy(() => additionalRecipientSchema))),
  paymentId: s.optionalNullable(s.string()),
  _keysMap: {
    locationId: "location_id",
    transactionId: "transaction_id",
    createdAt: "created_at",
    amountMoney: "amount_money",
    tipMoney: "tip_money",
    processingFeeMoney: "processing_fee_money",
    customerId: "customer_id",
    cardDetails: "card_details",
    cashDetails: "cash_details",
    bankAccountDetails: "bank_account_details",
    buyNowPayLaterDetails: "buy_now_pay_later_details",
    squareAccountDetails: "square_account_details",
    additionalRecipients: "additional_recipients",
    paymentId: "payment_id",
  },
});
