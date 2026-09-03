import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  catalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelectionSchema,
  type CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection,
} from "./catalog-custom-attribute-definition-selection-config-custom-attribute-selection.js";

export type CatalogCustomAttributeDefinitionSelectionConfig = {
  maxAllowedSelections?: number | null;
  allowedSelections?: CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection[] | null;
};

export const catalogCustomAttributeDefinitionSelectionConfigSchema: Schema<CatalogCustomAttributeDefinitionSelectionConfig> =
  s.object<CatalogCustomAttributeDefinitionSelectionConfig>({
    maxAllowedSelections: s.optionalNullable(s.number()),
    allowedSelections: s.optionalNullable(
      s.array(s.lazy(() => catalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelectionSchema)),
    ),
    _keysMap: {
      maxAllowedSelections: "max_allowed_selections",
      allowedSelections: "allowed_selections",
    },
  });
