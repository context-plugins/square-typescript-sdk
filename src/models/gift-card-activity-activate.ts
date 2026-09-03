import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type GiftCardActivityActivate = {
  amountMoney?: Money;
  orderId?: string | null;
  lineItemUid?: string | null;
  referenceId?: string | null;
  buyerPaymentInstrumentIds?: string[] | null;
};

export const giftCardActivityActivateSchema: Schema<GiftCardActivityActivate> =
  s.object<GiftCardActivityActivate>({
    amountMoney: s.optional(s.lazy(() => moneySchema)),
    orderId: s.optionalNullable(s.string()),
    lineItemUid: s.optionalNullable(s.string()),
    referenceId: s.optionalNullable(s.string()),
    buyerPaymentInstrumentIds: s.optionalNullable(s.array(s.string())),
    _keysMap: {
      amountMoney: "amount_money",
      orderId: "order_id",
      lineItemUid: "line_item_uid",
      referenceId: "reference_id",
      buyerPaymentInstrumentIds: "buyer_payment_instrument_ids",
    },
  });
