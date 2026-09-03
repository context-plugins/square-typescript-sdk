import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogCustomAttributeDefinitionNumberConfig = {
  precision?: number | null;
};

export const catalogCustomAttributeDefinitionNumberConfigSchema: Schema<CatalogCustomAttributeDefinitionNumberConfig> =
  s.object<CatalogCustomAttributeDefinitionNumberConfig>({
    precision: s.optionalNullable(s.number()),
  });
