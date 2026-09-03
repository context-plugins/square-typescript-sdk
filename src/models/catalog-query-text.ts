import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogQueryText = {
  keywords: string[];
};

export const catalogQueryTextSchema: Schema<CatalogQueryText> = s.object<CatalogQueryText>({
  keywords: s.array(s.string()),
});
