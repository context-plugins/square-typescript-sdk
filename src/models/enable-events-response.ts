import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type EnableEventsResponse = {
  errors?: Error[];
};

export const enableEventsResponseSchema: Schema<EnableEventsResponse> = s.object<EnableEventsResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
