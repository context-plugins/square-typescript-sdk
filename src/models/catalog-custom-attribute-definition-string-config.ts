import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogCustomAttributeDefinitionStringConfig = {
  enforceUniqueness?: boolean | null;
};

export const catalogCustomAttributeDefinitionStringConfigSchema: Schema<CatalogCustomAttributeDefinitionStringConfig> =
  s.object<CatalogCustomAttributeDefinitionStringConfig>({
    enforceUniqueness: s.optionalNullable(s.boolean()),
    _keysMap: {
      enforceUniqueness: "enforce_uniqueness",
    },
  });
