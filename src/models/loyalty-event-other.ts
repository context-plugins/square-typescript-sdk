import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Provides metadata when the event `type` is `OTHER`. */
export type LoyaltyEventOther = {
  /** The Square-assigned ID of the [loyalty program](entity:LoyaltyProgram). */
  loyaltyProgramId: string;
  /** The number of points added or removed. */
  points: number;
};

export const loyaltyEventOtherSchema: Schema<LoyaltyEventOther> = s.object<LoyaltyEventOther>({
  loyaltyProgramId: s.string(),
  points: s.number(),
  _keysMap: {
    loyaltyProgramId: "loyalty_program_id",
  },
});
