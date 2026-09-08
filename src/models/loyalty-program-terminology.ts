import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents the naming used for loyalty points. */
export type LoyaltyProgramTerminology = {
  /** A singular unit for a point (for example, 1 point is called 1 star). */
  one: string;
  /** A plural unit for point (for example, 10 points is called 10 stars). */
  other: string;
};

export const loyaltyProgramTerminologySchema: Schema<LoyaltyProgramTerminology> =
  s.object<LoyaltyProgramTerminology>({
    one: s.string(),
    other: s.string(),
  });
