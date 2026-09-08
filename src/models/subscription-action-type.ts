import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Supported types of an action as a pending change to a subscription. */
export const SubscriptionActionType = {
  /** The action to execute a scheduled cancellation of a subscription. */
  Cancel: "CANCEL",
  /** The action to execute a scheduled pause of a subscription. */
  Pause: "PAUSE",
  /** The action to execute a scheduled resumption of a subscription. */
  Resume: "RESUME",
  /** The action to execute a scheduled swap of a subscription plan in a subscription. */
  SwapPlan: "SWAP_PLAN",
  /** A billing anchor date change action. */
  ChangeBillingAnchorDate: "CHANGE_BILLING_ANCHOR_DATE",
  /** The action marking when a subscription completes a fixed number of phases. */
  Complete: "COMPLETE",
} as const;
export type SubscriptionActionType =
  | (typeof SubscriptionActionType)[keyof typeof SubscriptionActionType]
  | (string & {});

export const subscriptionActionTypeSchema: EnumSchema<SubscriptionActionType> =
  s.enumOf<SubscriptionActionType>(SubscriptionActionType);
