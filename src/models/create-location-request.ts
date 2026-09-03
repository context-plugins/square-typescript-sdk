import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";

export type CreateLocationRequest = {
  location?: Location;
};

export const createLocationRequestSchema: Schema<CreateLocationRequest> = s.object<CreateLocationRequest>({
  location: s.optional(s.lazy(() => locationSchema)),
});
