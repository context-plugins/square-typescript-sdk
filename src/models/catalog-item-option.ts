import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogObjectSchema, type CatalogObject } from "./catalog-object.js";

export type CatalogItemOption = {
  name?: string | null;
  displayName?: string | null;
  description?: string | null;
  showColors?: boolean | null;
  values?: CatalogObject[] | null;
};

export const catalogItemOptionSchema: Schema<CatalogItemOption> = s.object<CatalogItemOption>({
  name: s.optionalNullable(s.string()),
  displayName: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  showColors: s.optionalNullable(s.boolean()),
  values: s.optionalNullable(s.array(s.lazy(() => catalogObjectSchema))),
  _keysMap: {
    displayName: "display_name",
    showColors: "show_colors",
  },
});
