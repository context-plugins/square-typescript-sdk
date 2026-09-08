import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents additional data for rules with the `CATEGORY` accrual type. */
export type LoyaltyProgramAccrualRuleCategoryData = {
  /**
   * The ID of the `CATEGORY` [catalog object](entity:CatalogObject) that buyers can purchase to
   * earn points.
   */
  categoryId: string;
};

export const loyaltyProgramAccrualRuleCategoryDataSchema: Schema<LoyaltyProgramAccrualRuleCategoryData> =
  s.object<LoyaltyProgramAccrualRuleCategoryData>({
    categoryId: s.string(),
    _keysMap: {
      categoryId: "category_id",
    },
  });
