import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { locationSchema, type Location } from "./location.js";

export type CreateLocationResponse = {
  errors?: Error[];
  location?: Location;
};

export const createLocationResponseSchema: Schema<CreateLocationResponse> = s.object<CreateLocationResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  location: s.optional(s.lazy(() => locationSchema)),
});
