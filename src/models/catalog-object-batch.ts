import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogObjectSchema, type CatalogObject } from "./catalog-object.js";

/** A batch of catalog objects. */
export type CatalogObjectBatch = {
  /** A list of CatalogObjects belonging to this batch. */
  objects: CatalogObject[];
};

export const catalogObjectBatchSchema: Schema<CatalogObjectBatch> = s.object<CatalogObjectBatch>({
  objects: s.array(s.lazy(() => catalogObjectSchema)),
});
