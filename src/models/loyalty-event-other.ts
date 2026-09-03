import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LoyaltyEventOther = {
  loyaltyProgramId: string;
  points: number;
};

export const loyaltyEventOtherSchema: Schema<LoyaltyEventOther> = s.object<LoyaltyEventOther>({
  loyaltyProgramId: s.string(),
  points: s.number(),
  _keysMap: {
    loyaltyProgramId: "loyalty_program_id",
  },
});
