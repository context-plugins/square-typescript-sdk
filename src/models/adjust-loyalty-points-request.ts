import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyEventAdjustPointsSchema,
  type LoyaltyEventAdjustPoints,
} from "./loyalty-event-adjust-points.js";

/** Represents an [AdjustLoyaltyPoints](api-endpoint:Loyalty-AdjustLoyaltyPoints) request. */
export type AdjustLoyaltyPointsRequest = {
  /**
   * A unique string that identifies this `AdjustLoyaltyPoints` request. Keys can be any valid
   * string, but must be unique for every request.
   */
  idempotencyKey: string;
  /** Provides metadata when the event `type` is `ADJUST_POINTS`. */
  adjustPoints: LoyaltyEventAdjustPoints;
  /**
   * Indicates whether to allow a negative adjustment to result in a negative balance. If `true`, a
   * negative balance is allowed when subtracting points. If `false`, Square returns a `BAD_REQUEST`
   * error when subtracting the specified number of points would result in a negative balance. The
   * default value is `false`.
   */
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
