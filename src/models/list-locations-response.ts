import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { locationSchema, type Location } from "./location.js";

/**
 * Defines the fields that are included in the response body of a request to the
 * [ListLocations](api-endpoint:Locations-ListLocations) endpoint.
 *
 * Either `errors` or `locations` is present in a given response (never both).
 */
export type ListLocationsResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The business locations. */
  locations?: Location[];
};

export const listLocationsResponseSchema: Schema<ListLocationsResponse> = s.object<ListLocationsResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  locations: s.optional(s.array(s.lazy(() => locationSchema))),
});
