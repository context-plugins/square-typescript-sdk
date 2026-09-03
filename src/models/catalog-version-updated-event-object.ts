import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  catalogVersionUpdatedEventCatalogVersionSchema,
  type CatalogVersionUpdatedEventCatalogVersion,
} from "./catalog-version-updated-event-catalog-version.js";

export type CatalogVersionUpdatedEventObject = {
  catalogVersion?: CatalogVersionUpdatedEventCatalogVersion;
};

export const catalogVersionUpdatedEventObjectSchema: Schema<CatalogVersionUpdatedEventObject> =
  s.object<CatalogVersionUpdatedEventObject>({
    catalogVersion: s.optional(s.lazy(() => catalogVersionUpdatedEventCatalogVersionSchema)),
    _keysMap: {
      catalogVersion: "catalog_version",
    },
  });
