import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { timecardSchema, type Timecard } from "./timecard.js";

export type SearchTimecardsResponse = {
  timecards?: Timecard[];
  cursor?: string;
  errors?: Error[];
};

export const searchTimecardsResponseSchema: Schema<SearchTimecardsResponse> =
  s.object<SearchTimecardsResponse>({
    timecards: s.optional(s.array(s.lazy(() => timecardSchema))),
    cursor: s.optional(s.string()),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
