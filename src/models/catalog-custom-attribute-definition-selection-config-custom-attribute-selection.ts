import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection = {
  uid?: string | null;
  name: string;
};

export const catalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelectionSchema: Schema<CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection> =
  s.object<CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection>({
    uid: s.optionalNullable(s.string()),
    name: s.string(),
  });
