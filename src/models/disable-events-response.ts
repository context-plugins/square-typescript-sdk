import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Defines the fields that are included in the response body of a request to the
 * [DisableEvents](api-endpoint:Events-DisableEvents) endpoint.
 *
 * Note: if there are errors processing the request, the events field will not be present.
 */
export type DisableEventsResponse = {
  /** Information on errors encountered during the request. */
  errors?: Error[];
};

export const disableEventsResponseSchema: Schema<DisableEventsResponse> = s.object<DisableEventsResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
