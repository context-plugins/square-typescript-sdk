import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  searchAvailabilityFilterSchema,
  type SearchAvailabilityFilter,
} from "./search-availability-filter.js";

export type SearchAvailabilityQuery = {
  filter: SearchAvailabilityFilter;
};

export const searchAvailabilityQuerySchema: Schema<SearchAvailabilityQuery> =
  s.object<SearchAvailabilityQuery>({
    filter: searchAvailabilityFilterSchema,
  });
