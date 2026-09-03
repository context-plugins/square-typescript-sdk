import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogObjectSchema, type CatalogObject } from "./catalog-object.js";
import { errorSchema, type Error } from "./error.js";

export type ListCatalogResponse = {
  errors?: Error[];
  cursor?: string;
  objects?: CatalogObject[];
};

export const listCatalogResponseSchema: Schema<ListCatalogResponse> = s.object<ListCatalogResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  cursor: s.optional(s.string()),
  objects: s.optional(s.array(s.lazy(() => catalogObjectSchema))),
});
