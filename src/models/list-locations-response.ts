import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { locationSchema, type Location } from "./location.js";

export type ListLocationsResponse = {
  errors?: Error[];
  locations?: Location[];
};

export const listLocationsResponseSchema: Schema<ListLocationsResponse> = s.object<ListLocationsResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  locations: s.optional(s.array(s.lazy(() => locationSchema))),
});
