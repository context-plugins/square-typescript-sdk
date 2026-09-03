import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogObjectCategory = {
  id?: string;
  ordinal?: number | null;
};

export const catalogObjectCategorySchema: Schema<CatalogObjectCategory> = s.object<CatalogObjectCategory>({
  id: s.optional(s.string()),
  ordinal: s.optionalNullable(s.number()),
});
