import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timecardSchema, type Timecard } from "./timecard.js";

export type UpdateTimecardRequest = {
  timecard: Timecard;
};

export const updateTimecardRequestSchema: Schema<UpdateTimecardRequest> = s.object<UpdateTimecardRequest>({
  timecard: timecardSchema,
});
