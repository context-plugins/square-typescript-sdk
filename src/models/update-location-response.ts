import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { locationSchema, type Location } from "./location.js";

export type UpdateLocationResponse = {
  errors?: Error[];
  location?: Location;
};

export const updateLocationResponseSchema: Schema<UpdateLocationResponse> = s.object<UpdateLocationResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  location: s.optional(s.lazy(() => locationSchema)),
});
