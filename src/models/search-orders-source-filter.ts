import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A filter based on order `source` information. */
export type SearchOrdersSourceFilter = {
  /**
   * Filters by the [Source](entity:OrderSource) `name`. The filter returns any orders with a
   * `source.name` that matches any of the listed source names.
   *
   * Max: 10 source names.
   */
  sourceNames?: string[] | null;
};

export const searchOrdersSourceFilterSchema: Schema<SearchOrdersSourceFilter> =
  s.object<SearchOrdersSourceFilter>({
    sourceNames: s.optionalNullable(s.array(s.string())),
    _keysMap: {
      sourceNames: "source_names",
    },
  });
