import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The query filter to return the search result whose searchable attribute values contain all of the
 * specified keywords or tokens, independent of the token order or case.
 */
export type CatalogQueryText = {
  /**
   * A list of 1, 2, or 3 search keywords. Keywords with fewer than 3 alphanumeric characters are
   * ignored.
   */
  keywords: string[];
};

export const catalogQueryTextSchema: Schema<CatalogQueryText> = s.object<CatalogQueryText>({
  keywords: s.array(s.string()),
});
