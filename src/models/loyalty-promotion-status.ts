import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the status of a [loyalty promotion](entity:LoyaltyPromotion). */
export const LoyaltyPromotionStatus = {
  /**
   * The loyalty promotion is currently active. Buyers can earn points for purchases that meet the
   * promotion conditions, such as the promotion's `available_time`.
   */
  Active: "ACTIVE",
  /**
   * The loyalty promotion has ended because the specified `end_date` was reached. `ENDED` is a
   * terminal status.
   */
  Ended: "ENDED",
  /** The loyalty promotion was canceled. `CANCELED` is a terminal status. */
  Canceled: "CANCELED",
  /**
   * The loyalty promotion is scheduled to start in the future. Square changes the promotion status
   * to `ACTIVE` when the `start_date` is reached.
   */
  Scheduled: "SCHEDULED",
} as const;
export type LoyaltyPromotionStatus =
  | (typeof LoyaltyPromotionStatus)[keyof typeof LoyaltyPromotionStatus]
  | (string & {});

export const loyaltyPromotionStatusSchema: EnumSchema<LoyaltyPromotionStatus> =
  s.enumOf<LoyaltyPromotionStatus>(LoyaltyPromotionStatus);
