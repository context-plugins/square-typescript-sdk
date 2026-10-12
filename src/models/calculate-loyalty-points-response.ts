import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/** Represents a [CalculateLoyaltyPoints](api-endpoint:Loyalty-CalculateLoyaltyPoints) response. */
export type CalculateLoyaltyPointsResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The number of points that the buyer can earn from the base loyalty program. */
  points?: number;
  /**
   * The number of points that the buyer can earn from a loyalty promotion. To be eligible to earn
   * promotion points, the purchase must first qualify for program points. When `order_id` is not
   * provided in the request, this value is always 0.
   */
  promotionPoints?: number;
};

export const calculateLoyaltyPointsResponseSchema: Schema<CalculateLoyaltyPointsResponse> =
  s.object<CalculateLoyaltyPointsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    points: s.optional(s.int()),
    promotionPoints: s.optional(s.int()),
    _keysMap: {
      promotionPoints: "promotion_points",
    },
  });
