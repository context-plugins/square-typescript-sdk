import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SubscriptionStatus = {
  Pending: "PENDING",
  Active: "ACTIVE",
  Canceled: "CANCELED",
  Deactivated: "DEACTIVATED",
  Paused: "PAUSED",
  Completed: "COMPLETED",
} as const;
export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus] | (string & {});

export const subscriptionStatusSchema: EnumSchema<SubscriptionStatus> =
  s.enumOf<SubscriptionStatus>(SubscriptionStatus);
