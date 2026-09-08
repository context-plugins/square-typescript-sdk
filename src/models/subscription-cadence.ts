import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Determines the billing cadence of a [Subscription](entity:Subscription) */
export const SubscriptionCadence = {
  /** Once per day */
  Daily: "DAILY",
  /** Once per week */
  Weekly: "WEEKLY",
  /** Every two weeks */
  EveryTwoWeeks: "EVERY_TWO_WEEKS",
  /** Once every 30 days */
  ThirtyDays: "THIRTY_DAYS",
  /** Once every 60 days */
  SixtyDays: "SIXTY_DAYS",
  /** Once every 90 days */
  NinetyDays: "NINETY_DAYS",
  /** Once per month */
  Monthly: "MONTHLY",
  /** Once every two months */
  EveryTwoMonths: "EVERY_TWO_MONTHS",
  /** Once every three months */
  Quarterly: "QUARTERLY",
  /** Once every four months */
  EveryFourMonths: "EVERY_FOUR_MONTHS",
  /** Once every six months */
  EverySixMonths: "EVERY_SIX_MONTHS",
  /** Once per year */
  Annual: "ANNUAL",
  /** Once every two years */
  EveryTwoYears: "EVERY_TWO_YEARS",
} as const;
export type SubscriptionCadence =
  | (typeof SubscriptionCadence)[keyof typeof SubscriptionCadence]
  | (string & {});

export const subscriptionCadenceSchema: EnumSchema<SubscriptionCadence> =
  s.enumOf<SubscriptionCadence>(SubscriptionCadence);
