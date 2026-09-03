import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LoyaltyEventSource = {
  Square: "SQUARE",
  LoyaltyApi: "LOYALTY_API",
} as const;
export type LoyaltyEventSource = (typeof LoyaltyEventSource)[keyof typeof LoyaltyEventSource] | (string & {});

export const loyaltyEventSourceSchema: EnumSchema<LoyaltyEventSource> =
  s.enumOf<LoyaltyEventSource>(LoyaltyEventSource);
