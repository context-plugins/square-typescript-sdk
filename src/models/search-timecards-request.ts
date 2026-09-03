import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timecardQuerySchema, type TimecardQuery } from "./timecard-query.js";

export type SearchTimecardsRequest = {
  query?: TimecardQuery;
  limit?: number;
  cursor?: string;
};

export const searchTimecardsRequestSchema: Schema<SearchTimecardsRequest> = s.object<SearchTimecardsRequest>({
  query: s.optional(s.lazy(() => timecardQuerySchema)),
  limit: s.optional(s.number()),
  cursor: s.optional(s.string()),
});
