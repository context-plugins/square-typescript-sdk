import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LoyaltyProgramTerminology = {
  one: string;
  other: string;
};

export const loyaltyProgramTerminologySchema: Schema<LoyaltyProgramTerminology> =
  s.object<LoyaltyProgramTerminology>({
    one: s.string(),
    other: s.string(),
  });
