import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LoyaltyProgramAccrualRuleItemVariationData = {
  itemVariationId: string;
};

export const loyaltyProgramAccrualRuleItemVariationDataSchema: Schema<LoyaltyProgramAccrualRuleItemVariationData> =
  s.object<LoyaltyProgramAccrualRuleItemVariationData>({
    itemVariationId: s.string(),
    _keysMap: {
      itemVariationId: "item_variation_id",
    },
  });
