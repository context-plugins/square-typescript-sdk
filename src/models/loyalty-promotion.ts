import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyPromotionAvailableTimeDataSchema,
  type LoyaltyPromotionAvailableTimeData,
} from "./loyalty-promotion-available-time-data.js";
import {
  loyaltyPromotionIncentiveSchema,
  type LoyaltyPromotionIncentive,
} from "./loyalty-promotion-incentive.js";
import { loyaltyPromotionStatusSchema, type LoyaltyPromotionStatus } from "./loyalty-promotion-status.js";
import {
  loyaltyPromotionTriggerLimitSchema,
  type LoyaltyPromotionTriggerLimit,
} from "./loyalty-promotion-trigger-limit.js";
import { moneySchema, type Money } from "./money.js";

export type LoyaltyPromotion = {
  id?: string;
  name: string;
  incentive: LoyaltyPromotionIncentive;
  availableTime: LoyaltyPromotionAvailableTimeData;
  triggerLimit?: LoyaltyPromotionTriggerLimit;
  status?: LoyaltyPromotionStatus;
  createdAt?: string;
  canceledAt?: string;
  updatedAt?: string;
  loyaltyProgramId?: string;
  minimumSpendAmountMoney?: Money;
  qualifyingItemVariationIds?: string[] | null;
  qualifyingCategoryIds?: string[] | null;
};

export const loyaltyPromotionSchema: Schema<LoyaltyPromotion> = s.object<LoyaltyPromotion>({
  id: s.optional(s.string()),
  name: s.string(),
  incentive: loyaltyPromotionIncentiveSchema,
  availableTime: loyaltyPromotionAvailableTimeDataSchema,
  triggerLimit: s.optional(s.lazy(() => loyaltyPromotionTriggerLimitSchema)),
  status: s.optional(s.lazy(() => loyaltyPromotionStatusSchema)),
  createdAt: s.optional(s.string()),
  canceledAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  loyaltyProgramId: s.optional(s.string()),
  minimumSpendAmountMoney: s.optional(s.lazy(() => moneySchema)),
  qualifyingItemVariationIds: s.optionalNullable(s.array(s.string())),
  qualifyingCategoryIds: s.optionalNullable(s.array(s.string())),
  _keysMap: {
    availableTime: "available_time",
    triggerLimit: "trigger_limit",
    createdAt: "created_at",
    canceledAt: "canceled_at",
    updatedAt: "updated_at",
    loyaltyProgramId: "loyalty_program_id",
    minimumSpendAmountMoney: "minimum_spend_amount_money",
    qualifyingItemVariationIds: "qualifying_item_variation_ids",
    qualifyingCategoryIds: "qualifying_category_ids",
  },
});
