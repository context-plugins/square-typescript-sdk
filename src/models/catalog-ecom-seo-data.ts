import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogEcomSeoData = {
  pageTitle?: string | null;
  pageDescription?: string | null;
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
