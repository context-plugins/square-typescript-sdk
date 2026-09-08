import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** SEO data for for a seller's Square Online store. */
export type CatalogEcomSeoData = {
  /** The SEO title used for the Square Online store. */
  pageTitle?: string | null;
  /** The SEO description used for the Square Online store. */
  pageDescription?: string | null;
  /** The SEO permalink used for the Square Online store. */
  permalink?: string | null;
};

export const catalogEcomSeoDataSchema: Schema<CatalogEcomSeoData> = s.object<CatalogEcomSeoData>({
  pageTitle: s.optionalNullable(s.string()),
  pageDescription: s.optionalNullable(s.string()),
  permalink: s.optionalNullable(s.string()),
  _keysMap: {
    pageTitle: "page_title",
    pageDescription: "page_description",
  },
});
