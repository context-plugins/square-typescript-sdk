import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogImage = {
  name?: string | null;
  url?: string | null;
  caption?: string | null;
  photoStudioOrderId?: string | null;
};

export const catalogImageSchema: Schema<CatalogImage> = s.object<CatalogImage>({
  name: s.optionalNullable(s.string()),
  url: s.optionalNullable(s.string()),
  caption: s.optionalNullable(s.string()),
  photoStudioOrderId: s.optionalNullable(s.string()),
  _keysMap: {
    photoStudioOrderId: "photo_studio_order_id",
  },
});
