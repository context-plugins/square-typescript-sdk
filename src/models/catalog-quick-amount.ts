import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogQuickAmountTypeSchema, type CatalogQuickAmountType } from "./catalog-quick-amount-type.js";
import { moneySchema, type Money } from "./money.js";

/** Represents a Quick Amount in the Catalog. */
export type CatalogQuickAmount = {
  /** Determines the type of a specific Quick Amount. */
  type: CatalogQuickAmountType;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  amount: Money;
  /**
   * Describes the ranking of the Quick Amount provided by machine learning model, in the range [0,
   * 100]. MANUAL type amount will always have score = 100.
   */
  score?: number | null;
  /** The order in which this Quick Amount should be displayed. */
  ordinal?: number | null;
};

export const catalogQuickAmountSchema: Schema<CatalogQuickAmount> = s.object<CatalogQuickAmount>({
  type: catalogQuickAmountTypeSchema,
  amount: moneySchema,
  score: s.optionalNullable(s.number()),
  ordinal: s.optionalNullable(s.number()),
});
