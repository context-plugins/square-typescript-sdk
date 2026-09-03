import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { errorSchema, type Error } from "./error.js";
import { v1MoneySchema, type V1Money } from "./v1-money.js";
import { v1OrderHistoryEntrySchema, type V1OrderHistoryEntry } from "./v1-order-history-entry.js";
import { v1OrderStateSchema, type V1OrderState } from "./v1-order-state.js";
import { v1TenderSchema, type V1Tender } from "./v1-tender.js";

export type V1Order = {
  errors?: Error[] | null;
  id?: string;
  buyerEmail?: string | null;
  recipientName?: string | null;
  recipientPhoneNumber?: string | null;
  state?: V1OrderState;
  shippingAddress?: Address;
  subtotalMoney?: V1Money;
  totalShippingMoney?: V1Money;
  totalTaxMoney?: V1Money;
  totalPriceMoney?: V1Money;
  totalDiscountMoney?: V1Money;
  createdAt?: string;
  updatedAt?: string;
  expiresAt?: string | null;
  paymentId?: string | null;
  buyerNote?: string | null;
  completedNote?: string | null;
  refundedNote?: string | null;
  canceledNote?: string | null;
  tender?: V1Tender;
  orderHistory?: V1OrderHistoryEntry[] | null;
  promoCode?: string | null;
  btcReceiveAddress?: string | null;
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
  btcPriceSatoshi: s.optionalNullable(s.number()),
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
