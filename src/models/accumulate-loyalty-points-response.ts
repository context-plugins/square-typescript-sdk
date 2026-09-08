import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { loyaltyEventSchema, type LoyaltyEvent } from "./loyalty-event.js";

/**
 * Represents an [AccumulateLoyaltyPoints](api-endpoint:Loyalty-AccumulateLoyaltyPoints) response.
 */
export type AccumulateLoyaltyPointsResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * Provides information about a loyalty event. For more information, see [Search for
   * Balance-Changing Loyalty
   * Events](https://developer.squareup.com/docs/loyalty-api/loyalty-events).
   */
  event?: LoyaltyEvent;
  /**
   * The resulting loyalty events. If the purchase qualifies for points, the `ACCUMULATE_POINTS`
   * event is always included. When using the Orders API, the `ACCUMULATE_PROMOTION_POINTS` event is
   * included if the purchase also qualifies for a loyalty promotion.
   */
  events?: LoyaltyEvent[];
};

export const accumulateLoyaltyPointsResponseSchema: Schema<AccumulateLoyaltyPointsResponse> =
  s.object<AccumulateLoyaltyPointsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    event: s.optional(s.lazy(() => loyaltyEventSchema)),
    events: s.optional(s.array(s.lazy(() => loyaltyEventSchema))),
  });
