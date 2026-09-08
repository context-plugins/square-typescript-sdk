import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";

/** The request object for the [UpdateLocation](api-endpoint:Locations-UpdateLocation) endpoint. */
export type UpdateLocationRequest = {
  /**
   * Represents one of a business' [locations](https://developer.squareup.com/docs/locations-api).
   */
  location?: Location;
};

export const updateLocationRequestSchema: Schema<UpdateLocationRequest> = s.object<UpdateLocationRequest>({
  location: s.optional(s.lazy(() => locationSchema)),
});
