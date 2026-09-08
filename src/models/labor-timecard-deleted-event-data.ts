import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LaborTimecardDeletedEventData = {
  /** The type of object affected by the event. For this event, the value is `timecard`. */
  type?: string | null;
  /** The ID of the affected `Timecard`. */
  id?: string;
  /** Is true if the affected object was deleted. Otherwise absent. */
  deleted?: boolean | null;
};

export const laborTimecardDeletedEventDataSchema: Schema<LaborTimecardDeletedEventData> =
  s.object<LaborTimecardDeletedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    deleted: s.optionalNullable(s.boolean()),
  });
