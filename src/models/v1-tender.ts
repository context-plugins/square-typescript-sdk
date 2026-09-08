import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v1MoneySchema, type V1Money } from "./v1-money.js";
import { v1TenderCardBrandSchema, type V1TenderCardBrand } from "./v1-tender-card-brand.js";
import { v1TenderEntryMethodSchema, type V1TenderEntryMethod } from "./v1-tender-entry-method.js";
import { v1TenderTypeSchema, type V1TenderType } from "./v1-tender-type.js";

/**
 * A tender represents a discrete monetary exchange. Square represents this exchange as a money
 * object with a specific currency and amount, where the amount is given in the smallest
 * denomination of the given currency.
 *
 * Square POS can accept more than one form of tender for a single payment (such as by splitting a
 * bill between a credit card and a gift card). The `tender` field of the Payment object lists all
 * forms of tender used for the payment.
 *
 * Split tender payments behave slightly differently from single tender payments:
 *
 * The receipt_url for a split tender corresponds only to the first tender listed in the tender
 * field. To get the receipt URLs for the remaining tenders, use the receipt_url fields of the
 * corresponding Tender objects.
 *
 * *A note on gift cards**: when a customer purchases a Square gift card from a merchant, the
 * merchant receives the full amount of the gift card in the associated payment.
 *
 * When that gift card is used as a tender, the balance of the gift card is reduced and the merchant
 * receives no funds. A `Tender` object with a type of `SQUARE_GIFT_CARD` indicates a gift card was
 * used for some or all of the associated payment.
 */
export type V1Tender = {
  /** The tender's unique ID. */
  id?: string;
  type?: V1TenderType;
  /** A human-readable description of the tender. */
  name?: string | null;
  /** The ID of the employee that processed the tender. */
  employeeId?: string | null;
  /** The URL of the receipt for the tender. */
  receiptUrl?: string | null;
  /** The brand of a credit card. */
  cardBrand?: V1TenderCardBrand;
  /** The last four digits of the provided credit card's account number. */
  panSuffix?: string | null;
  entryMethod?: V1TenderEntryMethod;
  /**
   * Notes entered by the merchant about the tender at the time of payment, if any. Typically only
   * present for tender with the type: OTHER.
   */
  paymentNote?: string | null;
  totalMoney?: V1Money;
  tenderedMoney?: V1Money;
  /** The time when the tender was created, in ISO 8601 format. */
  tenderedAt?: string | null;
  /** The time when the tender was settled, in ISO 8601 format. */
  settledAt?: string | null;
  changeBackMoney?: V1Money;
  refundedMoney?: V1Money;
  /**
   * Indicates whether or not the tender is associated with an exchange. If is_exchange is true, the
   * tender represents the value of goods returned in an exchange not the actual money paid. The
   * exchange value reduces the tender amounts needed to pay for items purchased in the exchange.
   */
  isExchange?: boolean | null;
};

export const v1TenderSchema: Schema<V1Tender> = s.object<V1Tender>({
  id: s.optional(s.string()),
  type: s.optional(s.lazy(() => v1TenderTypeSchema)),
  name: s.optionalNullable(s.string()),
  employeeId: s.optionalNullable(s.string()),
  receiptUrl: s.optionalNullable(s.string()),
  cardBrand: s.optional(s.lazy(() => v1TenderCardBrandSchema)),
  panSuffix: s.optionalNullable(s.string()),
  entryMethod: s.optional(s.lazy(() => v1TenderEntryMethodSchema)),
  paymentNote: s.optionalNullable(s.string()),
  totalMoney: s.optional(s.lazy(() => v1MoneySchema)),
  tenderedMoney: s.optional(s.lazy(() => v1MoneySchema)),
  tenderedAt: s.optionalNullable(s.string()),
  settledAt: s.optionalNullable(s.string()),
  changeBackMoney: s.optional(s.lazy(() => v1MoneySchema)),
  refundedMoney: s.optional(s.lazy(() => v1MoneySchema)),
  isExchange: s.optionalNullable(s.boolean()),
  _keysMap: {
    employeeId: "employee_id",
    receiptUrl: "receipt_url",
    cardBrand: "card_brand",
    panSuffix: "pan_suffix",
    entryMethod: "entry_method",
    paymentNote: "payment_note",
    totalMoney: "total_money",
    tenderedMoney: "tendered_money",
    tenderedAt: "tendered_at",
    settledAt: "settled_at",
    changeBackMoney: "change_back_money",
    refundedMoney: "refunded_money",
    isExchange: "is_exchange",
  },
});
