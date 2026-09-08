import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A Square API V1 identifier of an item, including the object ID and its associated location ID.
 */
export type CatalogV1Id = {
  /**
   * The ID for an object used in the Square API V1, if the object ID differs from the Square API V2
   * object ID.
   */
  catalogV1Id?: string | null;
  /** The ID of the `Location` this Connect V1 ID is associated with. */
  locationId?: string | null;
};

export const catalogV1IdSchema: Schema<CatalogV1Id> = s.object<CatalogV1Id>({
  catalogV1Id: s.optionalNullable(s.string()),
  locationId: s.optionalNullable(s.string()),
  _keysMap: {
    catalogV1Id: "catalog_v1_id",
    locationId: "location_id",
  },
});
