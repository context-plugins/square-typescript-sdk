import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogV1Id = {
  catalogV1Id?: string | null;
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
