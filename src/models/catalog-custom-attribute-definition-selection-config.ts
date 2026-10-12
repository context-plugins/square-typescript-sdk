import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  catalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelectionSchema,
  type CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection,
} from "./catalog-custom-attribute-definition-selection-config-custom-attribute-selection.js";

/** Configuration associated with `SELECTION`-type custom attribute definitions. */
export type CatalogCustomAttributeDefinitionSelectionConfig = {
  /**
   * The maximum number of selections that can be set. The maximum value for this attribute is 100.
   * The default value is 1. The value can be modified, but changing the value will not affect
   * existing custom attribute values on objects. Clients need to handle custom attributes with more
   * selected values than allowed by this limit.
   */
  maxAllowedSelections?: number | null;
  /**
   * The set of valid `CatalogCustomAttributeSelections`. Up to a maximum of 100 selections can be
   * defined. Can be modified.
   */
  allowedSelections?: CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection[] | null;
};

export const catalogCustomAttributeDefinitionSelectionConfigSchema: Schema<CatalogCustomAttributeDefinitionSelectionConfig> =
  s.object<CatalogCustomAttributeDefinitionSelectionConfig>({
    maxAllowedSelections: s.optionalNullable(s.int()),
    allowedSelections: s.optionalNullable(
      s.array(s.lazy(() => catalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelectionSchema)),
    ),
    _keysMap: {
      maxAllowedSelections: "max_allowed_selections",
      allowedSelections: "allowed_selections",
    },
  });
