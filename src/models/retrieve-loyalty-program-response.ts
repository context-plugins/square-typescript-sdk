import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { loyaltyProgramSchema, type LoyaltyProgram } from "./loyalty-program.js";

/** A response that contains the loyalty program. */
export type RetrieveLoyaltyProgramResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * Represents a Square loyalty program. Loyalty programs define how buyers can earn points and
   * redeem points for rewards. Square sellers can have only one loyalty program, which is created
   * and managed from the Seller Dashboard. For more information, see [Loyalty Program
   * Overview](https://developer.squareup.com/docs/loyalty/overview).
   */
  program?: LoyaltyProgram;
};

export const retrieveLoyaltyProgramResponseSchema: Schema<RetrieveLoyaltyProgramResponse> =
  s.object<RetrieveLoyaltyProgramResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    program: s.optional(s.lazy(() => loyaltyProgramSchema)),
  });
