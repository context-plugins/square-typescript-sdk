import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LoyaltyEventAdjustPoints = {
  loyaltyProgramId?: string;
  points: number;
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
