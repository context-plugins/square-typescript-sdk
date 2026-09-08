import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Represents a
 * [DeleteLocationCustomAttribute](api-endpoint:LocationCustomAttributes-DeleteLocationCustomAttribute)
 * response. Either an empty object `{}` (for a successful deletion) or `errors` is present in the
 * response.
 */
export type DeleteLocationCustomAttributeResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const deleteLocationCustomAttributeResponseSchema: Schema<DeleteLocationCustomAttributeResponse> =
  s.object<DeleteLocationCustomAttributeResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
