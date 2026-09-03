import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type DeleteCustomerCustomAttributeDefinitionResponse = {
  errors?: Error[];
};

export const deleteCustomerCustomAttributeDefinitionResponseSchema: Schema<DeleteCustomerCustomAttributeDefinitionResponse> =
  s.object<DeleteCustomerCustomAttributeDefinitionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
