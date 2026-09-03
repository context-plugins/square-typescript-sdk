import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SearchSubscriptionsFilter = {
  customerIds?: string[] | null;
  locationIds?: string[] | null;
  sourceNames?: string[] | null;
};

export const searchSubscriptionsFilterSchema: Schema<SearchSubscriptionsFilter> =
  s.object<SearchSubscriptionsFilter>({
    customerIds: s.optionalNullable(s.array(s.string())),
    locationIds: s.optionalNullable(s.array(s.string())),
    sourceNames: s.optionalNullable(s.array(s.string())),
    _keysMap: {
      customerIds: "customer_ids",
      locationIds: "location_ids",
      sourceNames: "source_names",
    },
  });
