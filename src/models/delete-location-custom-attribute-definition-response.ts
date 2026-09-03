import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type DeleteLocationCustomAttributeDefinitionResponse = {
  errors?: Error[];
};

export const deleteLocationCustomAttributeDefinitionResponseSchema: Schema<DeleteLocationCustomAttributeDefinitionResponse> =
  s.object<DeleteLocationCustomAttributeDefinitionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
