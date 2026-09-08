import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  catalogVersionUpdatedEventObjectSchema,
  type CatalogVersionUpdatedEventObject,
} from "./catalog-version-updated-event-object.js";

export type CatalogVersionUpdatedEventData = {
  /** Name of the affected object’s type. */
  type?: string | null;
  object?: CatalogVersionUpdatedEventObject;
};

export const catalogVersionUpdatedEventDataSchema: Schema<CatalogVersionUpdatedEventData> =
  s.object<CatalogVersionUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    object: s.optional(s.lazy(() => catalogVersionUpdatedEventObjectSchema)),
  });
