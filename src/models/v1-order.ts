import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { errorSchema, type Error } from "./error.js";
import { v1MoneySchema, type V1Money } from "./v1-money.js";
import { v1OrderHistoryEntrySchema, type V1OrderHistoryEntry } from "./v1-order-history-entry.js";
import { v1OrderStateSchema, type V1OrderState } from "./v1-order-state.js";
import { v1TenderSchema, type V1Tender } from "./v1-tender.js";

/** V1Order */
export type V1Order = {
  /** Any errors that occurred during the request. */
  errors?: Error[] | null;
  /** The order's unique identifier. */
  id?: string;
  /** The email address of the order's buyer. */
  buyerEmail?: string | null;
  /** The name of the order's buyer. */
  recipientName?: string | null;
  /** The phone number to use for the order's delivery. */
  recipientPhoneNumber?: string | null;
  state?: V1OrderState;
  /**
   * Represents a postal address in a country. For more information, see [Working with
   * Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  shippingAddress?: Address;
  subtotalMoney?: V1Money;
  totalShippingMoney?: V1Money;
  totalTaxMoney?: V1Money;
  totalPriceMoney?: V1Money;
  totalDiscountMoney?: V1Money;
  /** The time when the order was created, in ISO 8601 format. */
  createdAt?: string;
  /** The time when the order was last modified, in ISO 8601 format. */
  updatedAt?: string;
  /** The time when the order expires if no action is taken, in ISO 8601 format. */
  expiresAt?: string | null;
  /** The unique identifier of the payment associated with the order. */
  paymentId?: string | null;
  /** A note provided by the buyer when the order was created, if any. */
  buyerNote?: string | null;
  /** A note provided by the merchant when the order's state was set to COMPLETED, if any */
  completedNote?: string | null;
  /** A note provided by the merchant when the order's state was set to REFUNDED, if any. */
  refundedNote?: string | null;
  /** A note provided by the merchant when the order's state was set to CANCELED, if any. */
  canceledNote?: string | null;
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
   * When that gift card is used as a tender, the balance of the gift card is reduced and the
   * merchant receives no funds. A `Tender` object with a type of `SQUARE_GIFT_CARD` indicates a
   * gift card was used for some or all of the associated payment.
   */
  tender?: V1Tender;
  /** The history of actions associated with the order. */
  orderHistory?: V1OrderHistoryEntry[] | null;
  /** The promo code provided by the buyer, if any. */
  promoCode?: string | null;
  /** For Bitcoin transactions, the address that the buyer sent Bitcoin to. */
  btcReceiveAddress?: string | null;
  /**
   * For Bitcoin transactions, the price of the buyer's order in satoshi (100 million satoshi equals
   * 1 BTC).
   */
  btcPriceSatoshi?: number | null;
};

export const v1OrderSchema: Schema<V1Order> = s.object<V1Order>({
  errors: s.optionalNullable(s.array(s.lazy(() => errorSchema))),
  id: s.optional(s.string()),
  buyerEmail: s.optionalNullable(s.string()),
  recipientName: s.optionalNullable(s.string()),
  recipientPhoneNumber: s.optionalNullable(s.string()),
  state: s.optional(s.lazy(() => v1OrderStateSchema)),
  shippingAddress: s.optional(s.lazy(() => addressSchema)),
  subtotalMoney: s.optional(s.lazy(() => v1MoneySchema)),
  totalShippingMoney: s.optional(s.lazy(() => v1MoneySchema)),
  totalTaxMoney: s.optional(s.lazy(() => v1MoneySchema)),
  totalPriceMoney: s.optional(s.lazy(() => v1MoneySchema)),
  totalDiscountMoney: s.optional(s.lazy(() => v1MoneySchema)),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  expiresAt: s.optionalNullable(s.string()),
  paymentId: s.optionalNullable(s.string()),
  buyerNote: s.optionalNullable(s.string()),
  completedNote: s.optionalNullable(s.string()),
  refundedNote: s.optionalNullable(s.string()),
  canceledNote: s.optionalNullable(s.string()),
  tender: s.optional(s.lazy(() => v1TenderSchema)),
  orderHistory: s.optionalNullable(s.array(s.lazy(() => v1OrderHistoryEntrySchema))),
  promoCode: s.optionalNullable(s.string()),
  btcReceiveAddress: s.optionalNullable(s.string()),
  btcPriceSatoshi: s.optionalNullable(s.float64()),
  _keysMap: {
    buyerEmail: "buyer_email",
    recipientName: "recipient_name",
    recipientPhoneNumber: "recipient_phone_number",
    shippingAddress: "shipping_address",
    subtotalMoney: "subtotal_money",
    totalShippingMoney: "total_shipping_money",
    totalTaxMoney: "total_tax_money",
    totalPriceMoney: "total_price_money",
    totalDiscountMoney: "total_discount_money",
    createdAt: "created_at",
    updatedAt: "updated_at",
    expiresAt: "expires_at",
    paymentId: "payment_id",
    buyerNote: "buyer_note",
    completedNote: "completed_note",
    refundedNote: "refunded_note",
    canceledNote: "canceled_note",
    orderHistory: "order_history",
    promoCode: "promo_code",
    btcReceiveAddress: "btc_receive_address",
    btcPriceSatoshi: "btc_price_satoshi",
  },
});
