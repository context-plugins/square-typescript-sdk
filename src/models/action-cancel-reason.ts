import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ActionCancelReason = {
  /** A person canceled the `TerminalCheckout` from a Square device. */
  BuyerCanceled: "BUYER_CANCELED",
  /** A client canceled the `TerminalCheckout` using the API. */
  SellerCanceled: "SELLER_CANCELED",
  /** The `TerminalCheckout` timed out (see `deadline_duration` on the `TerminalCheckout`). */
  TimedOut: "TIMED_OUT",
} as const;
export type ActionCancelReason = (typeof ActionCancelReason)[keyof typeof ActionCancelReason] | (string & {});

export const actionCancelReasonSchema: EnumSchema<ActionCancelReason> =
  s.enumOf<ActionCancelReason>(ActionCancelReason);
