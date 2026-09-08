import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { locationSchema, type Location } from "./location.js";

/**
 * The response object returned by the [UpdateLocation](api-endpoint:Locations-UpdateLocation)
 * endpoint.
 */
export type UpdateLocationResponse = {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /**
   * Represents one of a business' [locations](https://developer.squareup.com/docs/locations-api).
   */
  location?: Location;
};

export const updateLocationResponseSchema: Schema<UpdateLocationResponse> = s.object<UpdateLocationResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  location: s.optional(s.lazy(() => locationSchema)),
});
