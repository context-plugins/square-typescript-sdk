import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/** Represents a response from a delete request containing error messages if there are any. */
export type DeleteCustomerCustomAttributeDefinitionResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const deleteCustomerCustomAttributeDefinitionResponseSchema: Schema<DeleteCustomerCustomAttributeDefinitionResponse> =
  s.object<DeleteCustomerCustomAttributeDefinitionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
