import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type OrderLineItemAppliedTax = {
  uid?: string | null;
  taxUid: string;
  appliedMoney?: Money;
  autoApplied?: boolean;
};

export const orderLineItemAppliedTaxSchema: Schema<OrderLineItemAppliedTax> =
  s.object<OrderLineItemAppliedTax>({
    uid: s.optionalNullable(s.string()),
    taxUid: s.string(),
    appliedMoney: s.optional(s.lazy(() => moneySchema)),
    autoApplied: s.optional(s.boolean()),
    _keysMap: {
      taxUid: "tax_uid",
      appliedMoney: "applied_money",
      autoApplied: "auto_applied",
    },
  });
