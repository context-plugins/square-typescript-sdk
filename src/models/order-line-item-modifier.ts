import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type OrderLineItemModifier = {
  uid?: string | null;
  catalogObjectId?: string | null;
  catalogVersion?: number | null;
  name?: string | null;
  quantity?: string | null;
  basePriceMoney?: Money;
  totalPriceMoney?: Money;
  metadata?: Record<string, string> | null;
  parentModifierUid?: string | null;
};

export const orderLineItemModifierSchema: Schema<OrderLineItemModifier> = s.object<OrderLineItemModifier>({
  uid: s.optionalNullable(s.string()),
  catalogObjectId: s.optionalNullable(s.string()),
  catalogVersion: s.optionalNullable(s.number()),
  name: s.optionalNullable(s.string()),
  quantity: s.optionalNullable(s.string()),
  basePriceMoney: s.optional(s.lazy(() => moneySchema)),
  totalPriceMoney: s.optional(s.lazy(() => moneySchema)),
  metadata: s.optionalNullable(s.record(s.string(), s.string())),
  parentModifierUid: s.optionalNullable(s.string()),
  _keysMap: {
    catalogObjectId: "catalog_object_id",
    catalogVersion: "catalog_version",
    basePriceMoney: "base_price_money",
    totalPriceMoney: "total_price_money",
    parentModifierUid: "parent_modifier_uid",
  },
});
