import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogObjectReference = {
  objectId?: string | null;
  catalogVersion?: number | null;
};

export const catalogObjectReferenceSchema: Schema<CatalogObjectReference> = s.object<CatalogObjectReference>({
  objectId: s.optionalNullable(s.string()),
  catalogVersion: s.optionalNullable(s.number()),
  _keysMap: {
    objectId: "object_id",
    catalogVersion: "catalog_version",
  },
});
