import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BulkPublishScheduledShiftsData = {
  version?: number;
};

export const bulkPublishScheduledShiftsDataSchema: Schema<BulkPublishScheduledShiftsData> =
  s.object<BulkPublishScheduledShiftsData>({
    version: s.optional(s.number()),
  });
