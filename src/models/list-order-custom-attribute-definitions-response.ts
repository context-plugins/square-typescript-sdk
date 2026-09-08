import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeDefinitionSchema,
  type CustomAttributeDefinition,
} from "./custom-attribute-definition.js";
import { errorSchema, type Error } from "./error.js";

/** Represents a response from listing order custom attribute definitions. */
export type ListOrderCustomAttributeDefinitionsResponse = {
  /**
   * The retrieved custom attribute definitions. If no custom attribute definitions are found,
   * Square returns an empty object (`{}`).
   */
  customAttributeDefinitions: CustomAttributeDefinition[];
  /**
   * The cursor to provide in your next call to this endpoint to retrieve the next page of results
   * for your original request. This field is present only if the request succeeded and additional
   * results are available. For more information, see
   * [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
   */
  cursor?: string;
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const listOrderCustomAttributeDefinitionsResponseSchema: Schema<ListOrderCustomAttributeDefinitionsResponse> =
  s.object<ListOrderCustomAttributeDefinitionsResponse>({
    customAttributeDefinitions: s.array(s.lazy(() => customAttributeDefinitionSchema)),
    cursor: s.optional(s.string()),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      customAttributeDefinitions: "custom_attribute_definitions",
    },
  });
