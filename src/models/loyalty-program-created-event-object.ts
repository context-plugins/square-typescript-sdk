import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyProgramSchema, type LoyaltyProgram } from "./loyalty-program.js";

/**
 * An object that contains the loyalty program associated with a `loyalty.program.created` event.
 */
export type LoyaltyProgramCreatedEventObject = {
  /**
   * Represents a Square loyalty program. Loyalty programs define how buyers can earn points and
   * redeem points for rewards. Square sellers can have only one loyalty program, which is created
   * and managed from the Seller Dashboard. For more information, see [Loyalty Program
   * Overview](https://developer.squareup.com/docs/loyalty/overview).
   */
  loyaltyProgram?: LoyaltyProgram;
};

export const loyaltyProgramCreatedEventObjectSchema: Schema<LoyaltyProgramCreatedEventObject> =
  s.object<LoyaltyProgramCreatedEventObject>({
    loyaltyProgram: s.optional(s.lazy(() => loyaltyProgramSchema)),
    _keysMap: {
      loyaltyProgram: "loyalty_program",
    },
  });
