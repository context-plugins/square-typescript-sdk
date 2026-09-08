import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rangeSchema, type Range } from "./range.js";

/**
 * Supported custom attribute query expressions for calling the
 * [SearchCatalogItems](api-endpoint:Catalog-SearchCatalogItems) endpoint to search for items or
 * item variations.
 */
export type CustomAttributeFilter = {
  /**
   * A query expression to filter items or item variations by matching their custom attributes'
   * `custom_attribute_definition_id` property value against the the specified id. Exactly one of
   * `custom_attribute_definition_id` or `key` must be specified.
   */
  customAttributeDefinitionId?: string | null;
  /**
   * A query expression to filter items or item variations by matching their custom attributes'
   * `key` property value against the specified key. Exactly one of `custom_attribute_definition_id`
   * or `key` must be specified.
   */
  key?: string | null;
  /**
   * A query expression to filter items or item variations by matching their custom attributes'
   * `string_value` property value against the specified text. Exactly one of `string_filter`,
   * `number_filter`, `selection_uids_filter`, or `bool_filter` must be specified.
   */
  stringFilter?: string | null;
  /** The range of a number value between the specified lower and upper bounds. */
  numberFilter?: Range;
  /**
   * A query expression to filter items or item variations by matching their custom attributes'
   * `selection_uid_values` values against the specified selection uids. Exactly one of
   * `string_filter`, `number_filter`, `selection_uids_filter`, or `bool_filter` must be specified.
   */
  selectionUidsFilter?: string[] | null;
  /**
   * A query expression to filter items or item variations by matching their custom attributes'
   * `boolean_value` property values against the specified Boolean expression. Exactly one of
   * `string_filter`, `number_filter`, `selection_uids_filter`, or `bool_filter` must be specified.
   */
  boolFilter?: boolean | null;
};

export const customAttributeFilterSchema: Schema<CustomAttributeFilter> = s.object<CustomAttributeFilter>({
  customAttributeDefinitionId: s.optionalNullable(s.string()),
  key: s.optionalNullable(s.string()),
  stringFilter: s.optionalNullable(s.string()),
  numberFilter: s.optional(s.lazy(() => rangeSchema)),
  selectionUidsFilter: s.optionalNullable(s.array(s.string())),
  boolFilter: s.optionalNullable(s.boolean()),
  _keysMap: {
    customAttributeDefinitionId: "custom_attribute_definition_id",
    stringFilter: "string_filter",
    numberFilter: "number_filter",
    selectionUidsFilter: "selection_uids_filter",
    boolFilter: "bool_filter",
  },
});
