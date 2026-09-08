import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Supported subscription statuses. */
export const SubscriptionStatus = {
  /** The subscription is pending to start in the future. */
  Pending: "PENDING",
  /** The subscription is active. */
  Active: "ACTIVE",
  /** The subscription is canceled. */
  Canceled: "CANCELED",
  /** The subscription is deactivated. */
  Deactivated: "DEACTIVATED",
  /** The subscription is paused. */
  Paused: "PAUSED",
  /** The subscription has completed all of its phases. */
  Completed: "COMPLETED",
} as const;
export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus] | (string & {});

export const subscriptionStatusSchema: EnumSchema<SubscriptionStatus> =
  s.enumOf<SubscriptionStatus>(SubscriptionStatus);
