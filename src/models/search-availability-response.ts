import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { availabilitySchema, type Availability } from "./availability.js";
import { errorSchema, type Error } from "./error.js";

export type SearchAvailabilityResponse = {
  availabilities?: Availability[];
  errors?: Error[];
};

export const searchAvailabilityResponseSchema: Schema<SearchAvailabilityResponse> =
  s.object<SearchAvailabilityResponse>({
    availabilities: s.optional(s.array(s.lazy(() => availabilitySchema))),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
