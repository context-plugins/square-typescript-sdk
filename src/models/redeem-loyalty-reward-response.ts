import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { loyaltyEventSchema, type LoyaltyEvent } from "./loyalty-event.js";

/** A response that includes the `LoyaltyEvent` published for redeeming the reward. */
export type RedeemLoyaltyRewardResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * Provides information about a loyalty event. For more information, see [Search for
   * Balance-Changing Loyalty
   * Events](https://developer.squareup.com/docs/loyalty-api/loyalty-events).
   */
  event?: LoyaltyEvent;
};

export const redeemLoyaltyRewardResponseSchema: Schema<RedeemLoyaltyRewardResponse> =
  s.object<RedeemLoyaltyRewardResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    event: s.optional(s.lazy(() => loyaltyEventSchema)),
  });
