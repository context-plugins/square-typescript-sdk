import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";

export type UpdateLocationRequest = {
  location?: Location;
};

export const updateLocationRequestSchema: Schema<UpdateLocationRequest> = s.object<UpdateLocationRequest>({
  location: s.optional(s.lazy(() => locationSchema)),
});
