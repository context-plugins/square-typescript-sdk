import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogIdMapping = {
  clientObjectId?: string | null;
  objectId?: string | null;
};

export const catalogIdMappingSchema: Schema<CatalogIdMapping> = s.object<CatalogIdMapping>({
  clientObjectId: s.optionalNullable(s.string()),
  objectId: s.optionalNullable(s.string()),
  _keysMap: {
    clientObjectId: "client_object_id",
    objectId: "object_id",
  },
});
