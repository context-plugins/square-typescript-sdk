import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";

/** The request object for the [CreateLocation](api-endpoint:Locations-CreateLocation) endpoint. */
export type CreateLocationRequest = {
  /**
   * Represents one of a business' [locations](https://developer.squareup.com/docs/locations-api).
   */
  location?: Location;
};

export const createLocationRequestSchema: Schema<CreateLocationRequest> = s.object<CreateLocationRequest>({
  location: s.optional(s.lazy(() => locationSchema)),
});
