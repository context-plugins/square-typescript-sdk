import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyEventAccumulatePointsSchema,
  type LoyaltyEventAccumulatePoints,
} from "./loyalty-event-accumulate-points.js";

/**
 * Represents an [AccumulateLoyaltyPoints](api-endpoint:Loyalty-AccumulateLoyaltyPoints) request.
 */
export type AccumulateLoyaltyPointsRequest = {
  /** Provides metadata when the event `type` is `ACCUMULATE_POINTS`. */
  accumulatePoints: LoyaltyEventAccumulatePoints;
  /**
   * A unique string that identifies the `AccumulateLoyaltyPoints` request. Keys can be any valid
   * string but must be unique for every request.
   */
  idempotencyKey: string;
  /** The [location](entity:Location) where the purchase was made. */
  locationId: string;
};

export const accumulateLoyaltyPointsRequestSchema: Schema<AccumulateLoyaltyPointsRequest> =
  s.object<AccumulateLoyaltyPointsRequest>({
    accumulatePoints: loyaltyEventAccumulatePointsSchema,
    idempotencyKey: s.string(),
    locationId: s.string(),
    _keysMap: {
      accumulatePoints: "accumulate_points",
      idempotencyKey: "idempotency_key",
      locationId: "location_id",
    },
  });
