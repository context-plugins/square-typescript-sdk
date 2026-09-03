import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type RevokeTokenResponse = {
  success?: boolean;
  errors?: Error[];
};

export const revokeTokenResponseSchema: Schema<RevokeTokenResponse> = s.object<RevokeTokenResponse>({
  success: s.optional(s.boolean()),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
