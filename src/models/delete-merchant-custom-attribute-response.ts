import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Represents a
 * [DeleteMerchantCustomAttribute](api-endpoint:MerchantCustomAttributes-DeleteMerchantCustomAttribute)
 * response. Either an empty object `{}` (for a successful deletion) or `errors` is present in the
 * response.
 */
export type DeleteMerchantCustomAttributeResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const deleteMerchantCustomAttributeResponseSchema: Schema<DeleteMerchantCustomAttributeResponse> =
  s.object<DeleteMerchantCustomAttributeResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
