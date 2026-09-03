import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type DeleteLocationCustomAttributeResponse = {
  errors?: Error[];
};

export const deleteLocationCustomAttributeResponseSchema: Schema<DeleteLocationCustomAttributeResponse> =
  s.object<DeleteLocationCustomAttributeResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
