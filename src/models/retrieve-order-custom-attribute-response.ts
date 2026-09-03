import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customAttributeSchema, type CustomAttribute } from "./custom-attribute.js";
import { errorSchema, type Error } from "./error.js";

export type RetrieveOrderCustomAttributeResponse = {
  customAttribute?: CustomAttribute;
  errors?: Error[];
};

export const retrieveOrderCustomAttributeResponseSchema: Schema<RetrieveOrderCustomAttributeResponse> =
  s.object<RetrieveOrderCustomAttributeResponse>({
    customAttribute: s.optional(s.lazy(() => customAttributeSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      customAttribute: "custom_attribute",
    },
  });
