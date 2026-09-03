import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyEventAdjustPointsSchema,
  type LoyaltyEventAdjustPoints,
} from "./loyalty-event-adjust-points.js";

export type AdjustLoyaltyPointsRequest = {
  idempotencyKey: string;
  adjustPoints: LoyaltyEventAdjustPoints;
  allowNegativeBalance?: boolean | null;
};

export const adjustLoyaltyPointsRequestSchema: Schema<AdjustLoyaltyPointsRequest> =
  s.object<AdjustLoyaltyPointsRequest>({
    idempotencyKey: s.string(),
    adjustPoints: loyaltyEventAdjustPointsSchema,
    allowNegativeBalance: s.optionalNullable(s.boolean()),
    _keysMap: {
      idempotencyKey: "idempotency_key",
      adjustPoints: "adjust_points",
      allowNegativeBalance: "allow_negative_balance",
    },
  });
