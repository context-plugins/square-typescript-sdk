import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeDefinitionSchema,
  type CustomAttributeDefinition,
} from "./custom-attribute-definition.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Represents a
 * [ListLocationCustomAttributeDefinitions](api-endpoint:LocationCustomAttributes-ListLocationCustomAttributeDefinitions)
 * response. Either `custom_attribute_definitions`, an empty object, or `errors` is present in the
 * response. If additional results are available, the `cursor` field is also present along with
 * `custom_attribute_definitions`.
 */
export type ListLocationCustomAttributeDefinitionsResponse = {
  /**
   * The retrieved custom attribute definitions. If no custom attribute definitions are found,
   * Square returns an empty object (`{}`).
   */
  customAttributeDefinitions?: CustomAttributeDefinition[];
  /**
   * The cursor to provide in your next call to this endpoint to retrieve the next page of results
   * for your original request. This field is present only if the request succeeded and additional
   * results are available. For more information, see
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const listLocationCustomAttributeDefinitionsResponseSchema: Schema<ListLocationCustomAttributeDefinitionsResponse> =
  s.object<ListLocationCustomAttributeDefinitionsResponse>({
    customAttributeDefinitions: s.optional(s.array(s.lazy(() => customAttributeDefinitionSchema))),
    cursor: s.optional(s.string()),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      customAttributeDefinitions: "custom_attribute_definitions",
    },
  });
