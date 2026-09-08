import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { locationSchema, type Location } from "./location.js";

/**
 * Defines the fields that the [RetrieveLocation](api-endpoint:Locations-RetrieveLocation) endpoint
 * returns in a response.
 */
export type RetrieveLocationResponse = {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /**
   * Represents one of a business' [locations](https://developer.squareup.com/docs/locations-api).
   */
  location?: Location;
};

export const retrieveLocationResponseSchema: Schema<RetrieveLocationResponse> =
  s.object<RetrieveLocationResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    location: s.optional(s.lazy(() => locationSchema)),
  });
