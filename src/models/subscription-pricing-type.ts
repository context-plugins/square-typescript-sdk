import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SubscriptionPricingType = {
  Static: "STATIC",
  Relative: "RELATIVE",
} as const;
export type SubscriptionPricingType =
  | (typeof SubscriptionPricingType)[keyof typeof SubscriptionPricingType]
  | (string & {});

export const subscriptionPricingTypeSchema: EnumSchema<SubscriptionPricingType> =
  s.enumOf<SubscriptionPricingType>(SubscriptionPricingType);
