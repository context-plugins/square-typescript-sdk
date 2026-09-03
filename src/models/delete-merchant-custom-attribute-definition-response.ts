import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type DeleteMerchantCustomAttributeDefinitionResponse = {
  errors?: Error[];
};

export const deleteMerchantCustomAttributeDefinitionResponseSchema: Schema<DeleteMerchantCustomAttributeDefinitionResponse> =
  s.object<DeleteMerchantCustomAttributeDefinitionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
