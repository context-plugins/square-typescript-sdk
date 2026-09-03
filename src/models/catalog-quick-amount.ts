import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogQuickAmountTypeSchema, type CatalogQuickAmountType } from "./catalog-quick-amount-type.js";
import { moneySchema, type Money } from "./money.js";

export type CatalogQuickAmount = {
  type: CatalogQuickAmountType;
  amount: Money;
  score?: number | null;
  ordinal?: number | null;
};

export const catalogQuickAmountSchema: Schema<CatalogQuickAmount> = s.object<CatalogQuickAmount>({
  type: catalogQuickAmountTypeSchema,
  amount: moneySchema,
  score: s.optionalNullable(s.number()),
  ordinal: s.optionalNullable(s.number()),
});
