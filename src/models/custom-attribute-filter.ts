import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rangeSchema, type Range } from "./range.js";

export type CustomAttributeFilter = {
  customAttributeDefinitionId?: string | null;
  key?: string | null;
  stringFilter?: string | null;
  numberFilter?: Range;
  selectionUidsFilter?: string[] | null;
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
