import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents additional data for rules with the `ITEM_VARIATION` accrual type. */
export type LoyaltyProgramAccrualRuleItemVariationData = {
  /**
   * The ID of the `ITEM_VARIATION` [catalog object](entity:CatalogObject) that buyers can purchase
   * to earn points.
   */
  itemVariationId: string;
};

export const loyaltyProgramAccrualRuleItemVariationDataSchema: Schema<LoyaltyProgramAccrualRuleItemVariationData> =
  s.object<LoyaltyProgramAccrualRuleItemVariationData>({
    itemVariationId: s.string(),
    _keysMap: {
      itemVariationId: "item_variation_id",
    },
  });
