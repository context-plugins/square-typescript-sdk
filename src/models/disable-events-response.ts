import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type DisableEventsResponse = {
  errors?: Error[];
};

export const disableEventsResponseSchema: Schema<DisableEventsResponse> = s.object<DisableEventsResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
