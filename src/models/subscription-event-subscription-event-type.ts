import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Supported types of an event occurred to a subscription. */
export const SubscriptionEventSubscriptionEventType = {
  /** The subscription was started. */
  StartSubscription: "START_SUBSCRIPTION",
  /** The subscription plan was changed. */
  PlanChange: "PLAN_CHANGE",
  /** The subscription was stopped. */
  StopSubscription: "STOP_SUBSCRIPTION",
  /** The subscription was deactivated */
  DeactivateSubscription: "DEACTIVATE_SUBSCRIPTION",
  /** The subscription was resumed. */
  ResumeSubscription: "RESUME_SUBSCRIPTION",
  /** The subscription was paused. */
  PauseSubscription: "PAUSE_SUBSCRIPTION",
  /** The billing anchor date was changed. */
  BillingAnchorDateChanged: "BILLING_ANCHOR_DATE_CHANGED",
} as const;
export type SubscriptionEventSubscriptionEventType =
  | (typeof SubscriptionEventSubscriptionEventType)[keyof typeof SubscriptionEventSubscriptionEventType]
  | (string & {});

export const subscriptionEventSubscriptionEventTypeSchema: EnumSchema<SubscriptionEventSubscriptionEventType> =
  s.enumOf<SubscriptionEventSubscriptionEventType>(SubscriptionEventSubscriptionEventType);
