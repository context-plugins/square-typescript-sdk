import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LaborShiftDeletedEventData = {
  type?: string | null;
  id?: string;
  deleted?: boolean | null;
};

export const laborShiftDeletedEventDataSchema: Schema<LaborShiftDeletedEventData> =
  s.object<LaborShiftDeletedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    deleted: s.optionalNullable(s.boolean()),
  });
