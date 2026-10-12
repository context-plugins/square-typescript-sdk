import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Provides metadata when the event `type` is `EXPIRE_POINTS`. */
export type LoyaltyEventExpirePoints = {
  /** The Square-assigned ID of the [loyalty program](entity:LoyaltyProgram). */
  loyaltyProgramId: string;
  /** The number of points expired. */
  points: number;
};

export const loyaltyEventExpirePointsSchema: Schema<LoyaltyEventExpirePoints> =
  s.object<LoyaltyEventExpirePoints>({
    loyaltyProgramId: s.string(),
    points: s.int(),
    _keysMap: {
      loyaltyProgramId: "loyalty_program_id",
    },
  });
