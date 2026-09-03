import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type OrderLineItemAppliedDiscount = {
  uid?: string | null;
  discountUid: string;
  appliedMoney?: Money;
};

export const orderLineItemAppliedDiscountSchema: Schema<OrderLineItemAppliedDiscount> =
  s.object<OrderLineItemAppliedDiscount>({
    uid: s.optionalNullable(s.string()),
    discountUid: s.string(),
    appliedMoney: s.optional(s.lazy(() => moneySchema)),
    _keysMap: {
      discountUid: "discount_uid",
      appliedMoney: "applied_money",
    },
  });
