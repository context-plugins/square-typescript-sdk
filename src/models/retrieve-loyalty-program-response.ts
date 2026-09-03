import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { loyaltyProgramSchema, type LoyaltyProgram } from "./loyalty-program.js";

export type RetrieveLoyaltyProgramResponse = {
  errors?: Error[];
  program?: LoyaltyProgram;
};

export const retrieveLoyaltyProgramResponseSchema: Schema<RetrieveLoyaltyProgramResponse> =
  s.object<RetrieveLoyaltyProgramResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    program: s.optional(s.lazy(() => loyaltyProgramSchema)),
  });
