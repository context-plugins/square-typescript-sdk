import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A named selection for this `SELECTION`-type custom attribute definition. */
export type CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection = {
  /** Unique ID set by Square. */
  uid?: string | null;
  /** Selection name, unique within `allowed_selections`. */
  name: string;
};

export const catalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelectionSchema: Schema<CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection> =
  s.object<CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection>({
    uid: s.optionalNullable(s.string()),
    name: s.string(),
  });
