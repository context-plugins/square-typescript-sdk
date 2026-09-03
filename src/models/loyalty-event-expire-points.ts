import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LoyaltyEventExpirePoints = {
  loyaltyProgramId: string;
  points: number;
};

export const loyaltyEventExpirePointsSchema: Schema<LoyaltyEventExpirePoints> =
  s.object<LoyaltyEventExpirePoints>({
    loyaltyProgramId: s.string(),
    points: s.number(),
    _keysMap: {
      loyaltyProgramId: "loyalty_program_id",
    },
  });
