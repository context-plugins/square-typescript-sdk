import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogObjectSchema, type CatalogObject } from "./catalog-object.js";
import { errorSchema, type Error } from "./error.js";

export type CreateCatalogImageResponse = {
  errors?: Error[];
  image?: CatalogObject;
};

export const createCatalogImageResponseSchema: Schema<CreateCatalogImageResponse> =
  s.object<CreateCatalogImageResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    image: s.optional(s.lazy(() => catalogObjectSchema)),
  });
