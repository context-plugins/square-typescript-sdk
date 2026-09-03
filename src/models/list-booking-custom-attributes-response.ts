import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customAttributeSchema, type CustomAttribute } from "./custom-attribute.js";
import { errorSchema, type Error } from "./error.js";

export type ListBookingCustomAttributesResponse = {
  customAttributes?: CustomAttribute[];
  cursor?: string;
  errors?: Error[];
};

export const listBookingCustomAttributesResponseSchema: Schema<ListBookingCustomAttributesResponse> =
  s.object<ListBookingCustomAttributesResponse>({
    customAttributes: s.optional(s.array(s.lazy(() => customAttributeSchema))),
    cursor: s.optional(s.string()),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      customAttributes: "custom_attributes",
    },
  });
