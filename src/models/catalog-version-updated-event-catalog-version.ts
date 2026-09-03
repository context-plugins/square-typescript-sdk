import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogVersionUpdatedEventCatalogVersion = {
  updatedAt?: string;
};

export const catalogVersionUpdatedEventCatalogVersionSchema: Schema<CatalogVersionUpdatedEventCatalogVersion> =
  s.object<CatalogVersionUpdatedEventCatalogVersion>({
    updatedAt: s.optional(s.string()),
    _keysMap: {
      updatedAt: "updated_at",
    },
  });
