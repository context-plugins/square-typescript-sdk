import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SubscriptionCadence = {
  Daily: "DAILY",
  Weekly: "WEEKLY",
  EveryTwoWeeks: "EVERY_TWO_WEEKS",
  ThirtyDays: "THIRTY_DAYS",
  SixtyDays: "SIXTY_DAYS",
  NinetyDays: "NINETY_DAYS",
  Monthly: "MONTHLY",
  EveryTwoMonths: "EVERY_TWO_MONTHS",
  Quarterly: "QUARTERLY",
  EveryFourMonths: "EVERY_FOUR_MONTHS",
  EverySixMonths: "EVERY_SIX_MONTHS",
  Annual: "ANNUAL",
  EveryTwoYears: "EVERY_TWO_YEARS",
} as const;
export type SubscriptionCadence =
  | (typeof SubscriptionCadence)[keyof typeof SubscriptionCadence]
  | (string & {});

export const subscriptionCadenceSchema: EnumSchema<SubscriptionCadence> =
  s.enumOf<SubscriptionCadence>(SubscriptionCadence);
