import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Determines the pricing of a [Subscription](entity:Subscription) */
export const SubscriptionPricingType = {
  /** Static pricing */
  Static: "STATIC",
  /** Relative pricing */
  Relative: "RELATIVE",
} as const;
export type SubscriptionPricingType =
  | (typeof SubscriptionPricingType)[keyof typeof SubscriptionPricingType]
  | (string & {});

export const subscriptionPricingTypeSchema: EnumSchema<SubscriptionPricingType> =
  s.enumOf<SubscriptionPricingType>(SubscriptionPricingType);
