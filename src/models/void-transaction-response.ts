import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type VoidTransactionResponse = {
  errors?: Error[];
};

export const voidTransactionResponseSchema: Schema<VoidTransactionResponse> =
  s.object<VoidTransactionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
