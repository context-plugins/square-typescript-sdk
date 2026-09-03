import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyEventAccumulatePointsSchema,
  type LoyaltyEventAccumulatePoints,
} from "./loyalty-event-accumulate-points.js";

export type AccumulateLoyaltyPointsRequest = {
  accumulatePoints: LoyaltyEventAccumulatePoints;
  idempotencyKey: string;
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
