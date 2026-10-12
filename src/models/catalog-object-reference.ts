import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A reference to a Catalog object at a specific version. In general this is used as an entry point
 * into a graph of catalog objects, where the objects exist at a specific version.
 */
export type CatalogObjectReference = {
  /** The ID of the referenced object. */
  objectId?: string | null;
  /** The version of the object. */
  catalogVersion?: number | null;
};

export const catalogObjectReferenceSchema: Schema<CatalogObjectReference> = s.object<CatalogObjectReference>({
  objectId: s.optionalNullable(s.string()),
  catalogVersion: s.optionalNullable(s.int()),
  _keysMap: {
    objectId: "object_id",
    catalogVersion: "catalog_version",
  },
});
