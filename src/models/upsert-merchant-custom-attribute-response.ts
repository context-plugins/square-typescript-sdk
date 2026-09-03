import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customAttributeSchema, type CustomAttribute } from "./custom-attribute.js";
import { errorSchema, type Error } from "./error.js";

export type UpsertMerchantCustomAttributeResponse = {
  customAttribute?: CustomAttribute;
  errors?: Error[];
};

export const upsertMerchantCustomAttributeResponseSchema: Schema<UpsertMerchantCustomAttributeResponse> =
  s.object<UpsertMerchantCustomAttributeResponse>({
    customAttribute: s.optional(s.lazy(() => customAttributeSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      customAttribute: "custom_attribute",
    },
  });
