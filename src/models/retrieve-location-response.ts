import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { locationSchema, type Location } from "./location.js";

export type RetrieveLocationResponse = {
  errors?: Error[];
  location?: Location;
};

export const retrieveLocationResponseSchema: Schema<RetrieveLocationResponse> =
  s.object<RetrieveLocationResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    location: s.optional(s.lazy(() => locationSchema)),
  });
