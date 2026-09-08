import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customAttributeSchema, type CustomAttribute } from "./custom-attribute.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Represents a
 * [RetrieveMerchantCustomAttribute](api-endpoint:MerchantCustomAttributes-RetrieveMerchantCustomAttribute)
 * response. Either `custom_attribute_definition` or `errors` is present in the response.
 */
export type RetrieveMerchantCustomAttributeResponse = {
  /**
   * A custom attribute value. Each custom attribute value has a corresponding
   * `CustomAttributeDefinition` object.
   */
  customAttribute?: CustomAttribute;
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const retrieveMerchantCustomAttributeResponseSchema: Schema<RetrieveMerchantCustomAttributeResponse> =
  s.object<RetrieveMerchantCustomAttributeResponse>({
    customAttribute: s.optional(s.lazy(() => customAttributeSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      customAttribute: "custom_attribute",
    },
  });
