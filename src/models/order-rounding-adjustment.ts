import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type OrderRoundingAdjustment = {
  uid?: string | null;
  name?: string | null;
  amountMoney?: Money;
};

export const orderRoundingAdjustmentSchema: Schema<OrderRoundingAdjustment> =
  s.object<OrderRoundingAdjustment>({
    uid: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
    amountMoney: s.optional(s.lazy(() => moneySchema)),
    _keysMap: {
      amountMoney: "amount_money",
    },
  });
