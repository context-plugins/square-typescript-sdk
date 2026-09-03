import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogObjectSchema, type CatalogObject } from "./catalog-object.js";
import { errorSchema, type Error } from "./error.js";

export type UpdateCatalogImageResponse = {
  errors?: Error[];
  image?: CatalogObject;
};

export const updateCatalogImageResponseSchema: Schema<UpdateCatalogImageResponse> =
  s.object<UpdateCatalogImageResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    image: s.optional(s.lazy(() => catalogObjectSchema)),
  });
