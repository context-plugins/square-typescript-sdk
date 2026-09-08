import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  publishScheduledShiftResponseSchema,
  type PublishScheduledShiftResponse,
} from "./publish-scheduled-shift-response.js";

/**
 * Represents a [BulkPublishScheduledShifts](api-endpoint:Labor-BulkPublishScheduledShifts)
 * response. Either `scheduled_shifts` or `errors` is present in the response.
 */
export type BulkPublishScheduledShiftsResponse = {
  /**
   * A map of key-value pairs that represent responses for individual publish requests. The order of
   * responses might differ from the order in which the requests were provided.
   *
   * - Each key is the scheduled shift ID that was specified for a publish request.
   * - Each value is the corresponding response. If the request succeeds, the value is the published
   *   scheduled shift. If the request fails, the value is an `errors` array containing any errors
   *   that occurred while processing the request.
   */
  responses?: Record<string, PublishScheduledShiftResponse>;
  /** Any top-level errors that prevented the bulk operation from succeeding. */
  errors?: Error[];
};

export const bulkPublishScheduledShiftsResponseSchema: Schema<BulkPublishScheduledShiftsResponse> =
  s.object<BulkPublishScheduledShiftsResponse>({
    responses: s.optional(
      s.record(
        s.string(),
        s.lazy(() => publishScheduledShiftResponseSchema),
      ),
    ),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
