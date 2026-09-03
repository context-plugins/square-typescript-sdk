import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ActionCancelReason = {
  BuyerCanceled: "BUYER_CANCELED",
  SellerCanceled: "SELLER_CANCELED",
  TimedOut: "TIMED_OUT",
} as const;
export type ActionCancelReason = (typeof ActionCancelReason)[keyof typeof ActionCancelReason] | (string & {});

export const actionCancelReasonSchema: EnumSchema<ActionCancelReason> =
  s.enumOf<ActionCancelReason>(ActionCancelReason);
