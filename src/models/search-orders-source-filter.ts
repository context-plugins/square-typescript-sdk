import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SearchOrdersSourceFilter = {
  sourceNames?: string[] | null;
};

export const searchOrdersSourceFilterSchema: Schema<SearchOrdersSourceFilter> =
  s.object<SearchOrdersSourceFilter>({
    sourceNames: s.optionalNullable(s.array(s.string())),
    _keysMap: {
      sourceNames: "source_names",
    },
  });
