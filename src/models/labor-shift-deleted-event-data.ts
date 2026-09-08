import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LaborShiftDeletedEventData = {
  /** The type of object affected by the event. For this event, the value is `shift`. */
  type?: string | null;
  /** The ID of the affected `Shift`. */
  id?: string;
  /** Is true if the affected object was deleted. Otherwise absent. */
  deleted?: boolean | null;
};

export const laborShiftDeletedEventDataSchema: Schema<LaborShiftDeletedEventData> =
  s.object<LaborShiftDeletedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    deleted: s.optionalNullable(s.boolean()),
  });
