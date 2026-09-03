import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type RemoveGroupFromCustomerResponse = {
  errors?: Error[];
};

export const removeGroupFromCustomerResponseSchema: Schema<RemoveGroupFromCustomerResponse> =
  s.object<RemoveGroupFromCustomerResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
