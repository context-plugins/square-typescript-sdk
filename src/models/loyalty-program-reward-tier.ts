import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogObjectReferenceSchema, type CatalogObjectReference } from "./catalog-object-reference.js";

/**
 * Represents a reward tier in a loyalty program. A reward tier defines how buyers can redeem points
 * for a reward, such as the number of points required and the value and scope of the discount. A
 * loyalty program can offer multiple reward tiers.
 */
export type LoyaltyProgramRewardTier = {
  /** The Square-assigned ID of the reward tier. */
  id?: string;
  /** The points exchanged for the reward tier. */
  points: number;
  /** The name of the reward tier. */
  name?: string;
  /** The timestamp when the reward tier was created, in RFC 3339 format. */
  createdAt?: string;
  /**
   * A reference to a Catalog object at a specific version. In general this is used as an entry
   * point into a graph of catalog objects, where the objects exist at a specific version.
   */
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
