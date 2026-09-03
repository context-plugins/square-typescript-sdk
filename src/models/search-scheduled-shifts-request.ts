import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduledShiftQuerySchema, type ScheduledShiftQuery } from "./scheduled-shift-query.js";

export type SearchScheduledShiftsRequest = {
  query?: ScheduledShiftQuery;
  limit?: number;
  cursor?: string;
};

export const searchScheduledShiftsRequestSchema: Schema<SearchScheduledShiftsRequest> =
  s.object<SearchScheduledShiftsRequest>({
    query: s.optional(s.lazy(() => scheduledShiftQuerySchema)),
    limit: s.optional(s.number()),
    cursor: s.optional(s.string()),
  });
