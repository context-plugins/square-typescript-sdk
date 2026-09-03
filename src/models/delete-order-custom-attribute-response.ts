import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type DeleteOrderCustomAttributeResponse = {
  errors?: Error[];
};

export const deleteOrderCustomAttributeResponseSchema: Schema<DeleteOrderCustomAttributeResponse> =
  s.object<DeleteOrderCustomAttributeResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
