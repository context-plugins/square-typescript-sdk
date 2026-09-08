import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  searchAvailabilityFilterSchema,
  type SearchAvailabilityFilter,
} from "./search-availability-filter.js";

/** The query used to search for buyer-accessible availabilities of bookings. */
export type SearchAvailabilityQuery = {
  /** A query filter to search for buyer-accessible availabilities by. */
  filter: SearchAvailabilityFilter;
};

export const searchAvailabilityQuerySchema: Schema<SearchAvailabilityQuery> =
  s.object<SearchAvailabilityQuery>({
    filter: searchAvailabilityFilterSchema,
  });
