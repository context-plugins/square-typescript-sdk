import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogCustomAttributeDefinitionNumberConfig = {
  /**
   * An integer between 0 and 5 that represents the maximum number of positions allowed after the
   * decimal in number custom attribute values For example:
   *
   * - if the precision is 0, the quantity can be 1, 2, 3, etc.
   * - if the precision is 1, the quantity can be 0.1, 0.2, etc.
   * - if the precision is 2, the quantity can be 0.01, 0.12, etc.
   *
   * Default: 5
   */
  precision?: number | null;
};

export const catalogCustomAttributeDefinitionNumberConfigSchema: Schema<CatalogCustomAttributeDefinitionNumberConfig> =
  s.object<CatalogCustomAttributeDefinitionNumberConfig>({
    precision: s.optionalNullable(s.number()),
  });
