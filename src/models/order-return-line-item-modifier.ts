import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type OrderReturnLineItemModifier = {
  uid?: string | null;
  sourceModifierUid?: string | null;
  catalogObjectId?: string | null;
  catalogVersion?: number | null;
  name?: string | null;
  basePriceMoney?: Money;
  totalPriceMoney?: Money;
  quantity?: string | null;
};

export const orderReturnLineItemModifierSchema: Schema<OrderReturnLineItemModifier> =
  s.object<OrderReturnLineItemModifier>({
    uid: s.optionalNullable(s.string()),
    sourceModifierUid: s.optionalNullable(s.string()),
    catalogObjectId: s.optionalNullable(s.string()),
    catalogVersion: s.optionalNullable(s.number()),
    name: s.optionalNullable(s.string()),
    basePriceMoney: s.optional(s.lazy(() => moneySchema)),
    totalPriceMoney: s.optional(s.lazy(() => moneySchema)),
    quantity: s.optionalNullable(s.string()),
    _keysMap: {
      sourceModifierUid: "source_modifier_uid",
      catalogObjectId: "catalog_object_id",
      catalogVersion: "catalog_version",
      basePriceMoney: "base_price_money",
      totalPriceMoney: "total_price_money",
    },
  });
