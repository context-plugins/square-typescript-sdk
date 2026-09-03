import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type DeleteCustomerCardResponse = {
  errors?: Error[];
};

export const deleteCustomerCardResponseSchema: Schema<DeleteCustomerCardResponse> =
  s.object<DeleteCustomerCardResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
