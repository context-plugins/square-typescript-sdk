import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LoyaltyEventAccumulatePoints = {
  loyaltyProgramId?: string;
  points?: number | null;
  orderId?: string | null;
};

export const loyaltyEventAccumulatePointsSchema: Schema<LoyaltyEventAccumulatePoints> =
  s.object<LoyaltyEventAccumulatePoints>({
    loyaltyProgramId: s.optional(s.string()),
    points: s.optionalNullable(s.number()),
    orderId: s.optionalNullable(s.string()),
    _keysMap: {
      loyaltyProgramId: "loyalty_program_id",
      orderId: "order_id",
    },
  });
