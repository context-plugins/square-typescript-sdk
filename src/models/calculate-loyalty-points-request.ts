import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type CalculateLoyaltyPointsRequest = {
  orderId?: string | null;
  transactionAmountMoney?: Money;
  loyaltyAccountId?: string | null;
};

export const calculateLoyaltyPointsRequestSchema: Schema<CalculateLoyaltyPointsRequest> =
  s.object<CalculateLoyaltyPointsRequest>({
    orderId: s.optionalNullable(s.string()),
    transactionAmountMoney: s.optional(s.lazy(() => moneySchema)),
    loyaltyAccountId: s.optionalNullable(s.string()),
    _keysMap: {
      orderId: "order_id",
      transactionAmountMoney: "transaction_amount_money",
      loyaltyAccountId: "loyalty_account_id",
    },
  });
