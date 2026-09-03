import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SubscriptionActionType = {
  Cancel: "CANCEL",
  Pause: "PAUSE",
  Resume: "RESUME",
  SwapPlan: "SWAP_PLAN",
  ChangeBillingAnchorDate: "CHANGE_BILLING_ANCHOR_DATE",
  Complete: "COMPLETE",
} as const;
export type SubscriptionActionType =
  | (typeof SubscriptionActionType)[keyof typeof SubscriptionActionType]
  | (string & {});

export const subscriptionActionTypeSchema: EnumSchema<SubscriptionActionType> =
  s.enumOf<SubscriptionActionType>(SubscriptionActionType);
