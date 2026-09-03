import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LaborScheduledShiftDeletedEventData = {
  type?: string | null;
  id?: string;
  deleted?: boolean | null;
};

export const laborScheduledShiftDeletedEventDataSchema: Schema<LaborScheduledShiftDeletedEventData> =
  s.object<LaborScheduledShiftDeletedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    deleted: s.optionalNullable(s.boolean()),
  });
