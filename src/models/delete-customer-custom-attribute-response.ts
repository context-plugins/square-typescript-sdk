import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Represents a
 * [DeleteCustomerCustomAttribute](api-endpoint:CustomerCustomAttributes-DeleteCustomerCustomAttribute)
 * response. Either an empty object `{}` (for a successful deletion) or `errors` is present in the
 * response.
 */
export type DeleteCustomerCustomAttributeResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const deleteCustomerCustomAttributeResponseSchema: Schema<DeleteCustomerCustomAttributeResponse> =
  s.object<DeleteCustomerCustomAttributeResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
