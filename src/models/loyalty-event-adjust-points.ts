import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Provides metadata when the event `type` is `ADJUST_POINTS`. */
export type LoyaltyEventAdjustPoints = {
  /** The Square-assigned ID of the [loyalty program](entity:LoyaltyProgram). */
  loyaltyProgramId?: string;
  /** The number of points added or removed. */
  points: number;
  /** The reason for the adjustment of points. */
  reason?: string | null;
};

export const loyaltyEventAdjustPointsSchema: Schema<LoyaltyEventAdjustPoints> =
  s.object<LoyaltyEventAdjustPoints>({
    loyaltyProgramId: s.optional(s.string()),
    points: s.number(),
    reason: s.optionalNullable(s.string()),
    _keysMap: {
      loyaltyProgramId: "loyalty_program_id",
    },
  });
