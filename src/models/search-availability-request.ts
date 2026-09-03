import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { searchAvailabilityQuerySchema, type SearchAvailabilityQuery } from "./search-availability-query.js";

export type SearchAvailabilityRequest = {
  query: SearchAvailabilityQuery;
};

export const searchAvailabilityRequestSchema: Schema<SearchAvailabilityRequest> =
  s.object<SearchAvailabilityRequest>({
    query: searchAvailabilityQuerySchema,
  });
