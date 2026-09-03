import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyProgramSchema, type LoyaltyProgram } from "./loyalty-program.js";

export type LoyaltyProgramCreatedEventObject = {
  loyaltyProgram?: LoyaltyProgram;
};

export const loyaltyProgramCreatedEventObjectSchema: Schema<LoyaltyProgramCreatedEventObject> =
  s.object<LoyaltyProgramCreatedEventObject>({
    loyaltyProgram: s.optional(s.lazy(() => loyaltyProgramSchema)),
    _keysMap: {
      loyaltyProgram: "loyalty_program",
    },
  });
