import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type DeleteMerchantCustomAttributeResponse = {
  errors?: Error[];
};

export const deleteMerchantCustomAttributeResponseSchema: Schema<DeleteMerchantCustomAttributeResponse> =
  s.object<DeleteMerchantCustomAttributeResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
