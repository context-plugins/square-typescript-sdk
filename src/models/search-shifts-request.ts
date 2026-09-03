import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shiftQuerySchema, type ShiftQuery } from "./shift-query.js";

export type SearchShiftsRequest = {
  query?: ShiftQuery;
  limit?: number;
  cursor?: string;
};

export const searchShiftsRequestSchema: Schema<SearchShiftsRequest> = s.object<SearchShiftsRequest>({
  query: s.optional(s.lazy(() => shiftQuerySchema)),
  limit: s.optional(s.number()),
  cursor: s.optional(s.string()),
});
