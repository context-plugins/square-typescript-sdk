import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogObjectReferenceSchema, type CatalogObjectReference } from "./catalog-object-reference.js";

export type LoyaltyProgramRewardTier = {
  id?: string;
  points: number;
  name?: string;
  createdAt?: string;
  pricingRuleReference: CatalogObjectReference;
};

export const loyaltyProgramRewardTierSchema: Schema<LoyaltyProgramRewardTier> =
  s.object<LoyaltyProgramRewardTier>({
    id: s.optional(s.string()),
    points: s.number(),
    name: s.optional(s.string()),
    createdAt: s.optional(s.string()),
    pricingRuleReference: catalogObjectReferenceSchema,
    _keysMap: {
      createdAt: "created_at",
      pricingRuleReference: "pricing_rule_reference",
    },
  });
