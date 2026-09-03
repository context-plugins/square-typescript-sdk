import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customAttributeSchema, type CustomAttribute } from "./custom-attribute.js";
import { errorSchema, type Error } from "./error.js";

export type UpsertCustomerCustomAttributeResponse = {
  customAttribute?: CustomAttribute;
  errors?: Error[];
};

export const upsertCustomerCustomAttributeResponseSchema: Schema<UpsertCustomerCustomAttributeResponse> =
  s.object<UpsertCustomerCustomAttributeResponse>({
    customAttribute: s.optional(s.lazy(() => customAttributeSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      customAttribute: "custom_attribute",
    },
  });
