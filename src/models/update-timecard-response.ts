import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { timecardSchema, type Timecard } from "./timecard.js";

export type UpdateTimecardResponse = {
  timecard?: Timecard;
  errors?: Error[];
};

export const updateTimecardResponseSchema: Schema<UpdateTimecardResponse> = s.object<UpdateTimecardResponse>({
  timecard: s.optional(s.lazy(() => timecardSchema)),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
