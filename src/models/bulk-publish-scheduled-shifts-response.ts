import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  publishScheduledShiftResponseSchema,
  type PublishScheduledShiftResponse,
} from "./publish-scheduled-shift-response.js";

export type BulkPublishScheduledShiftsResponse = {
  responses?: Record<string, PublishScheduledShiftResponse>;
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
