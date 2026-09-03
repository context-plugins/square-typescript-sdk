import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LoyaltyProgramAccrualRuleCategoryData = {
  categoryId: string;
};

export const loyaltyProgramAccrualRuleCategoryDataSchema: Schema<LoyaltyProgramAccrualRuleCategoryData> =
  s.object<LoyaltyProgramAccrualRuleCategoryData>({
    categoryId: s.string(),
    _keysMap: {
      categoryId: "category_id",
    },
  });
