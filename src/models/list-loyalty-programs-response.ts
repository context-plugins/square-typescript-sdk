import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { loyaltyProgramSchema, type LoyaltyProgram } from "./loyalty-program.js";

export type ListLoyaltyProgramsResponse = {
  errors?: Error[];
  programs?: LoyaltyProgram[];
};

export const listLoyaltyProgramsResponseSchema: Schema<ListLoyaltyProgramsResponse> =
  s.object<ListLoyaltyProgramsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    programs: s.optional(s.array(s.lazy(() => loyaltyProgramSchema))),
  });
