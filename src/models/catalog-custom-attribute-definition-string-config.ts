import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Configuration associated with Custom Attribute Definitions of type `STRING`. */
export type CatalogCustomAttributeDefinitionStringConfig = {
  /**
   * If true, each Custom Attribute instance associated with this Custom Attribute Definition must
   * have a unique value within the seller's catalog. For example, this may be used for a value like
   * a SKU that should not be duplicated within a seller's catalog. May not be modified after the
   * definition has been created.
   */
  enforceUniqueness?: boolean | null;
};

export const catalogCustomAttributeDefinitionStringConfigSchema: Schema<CatalogCustomAttributeDefinitionStringConfig> =
  s.object<CatalogCustomAttributeDefinitionStringConfig>({
    enforceUniqueness: s.optionalNullable(s.boolean()),
    _keysMap: {
      enforceUniqueness: "enforce_uniqueness",
    },
  });
