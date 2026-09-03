import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SubscriptionEventSubscriptionEventType = {
  StartSubscription: "START_SUBSCRIPTION",
  PlanChange: "PLAN_CHANGE",
  StopSubscription: "STOP_SUBSCRIPTION",
  DeactivateSubscription: "DEACTIVATE_SUBSCRIPTION",
  ResumeSubscription: "RESUME_SUBSCRIPTION",
  PauseSubscription: "PAUSE_SUBSCRIPTION",
  BillingAnchorDateChanged: "BILLING_ANCHOR_DATE_CHANGED",
} as const;
export type SubscriptionEventSubscriptionEventType =
  | (typeof SubscriptionEventSubscriptionEventType)[keyof typeof SubscriptionEventSubscriptionEventType]
  | (string & {});

export const subscriptionEventSubscriptionEventTypeSchema: EnumSchema<SubscriptionEventSubscriptionEventType> =
  s.enumOf<SubscriptionEventSubscriptionEventType>(SubscriptionEventSubscriptionEventType);
