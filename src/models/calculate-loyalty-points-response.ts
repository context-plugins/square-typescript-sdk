import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type CalculateLoyaltyPointsResponse = {
  errors?: Error[];
  points?: number;
  promotionPoints?: number;
};

export const calculateLoyaltyPointsResponseSchema: Schema<CalculateLoyaltyPointsResponse> =
  s.object<CalculateLoyaltyPointsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    points: s.optional(s.number()),
    promotionPoints: s.optional(s.number()),
    _keysMap: {
      promotionPoints: "promotion_points",
    },
  });
