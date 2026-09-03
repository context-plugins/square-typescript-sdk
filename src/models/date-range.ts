import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DateRange = {
  startDate?: string | null;
  endDate?: string | null;
};

export const dateRangeSchema: Schema<DateRange> = s.object<DateRange>({
  startDate: s.optionalNullable(s.string()),
  endDate: s.optionalNullable(s.string()),
  _keysMap: {
    startDate: "start_date",
    endDate: "end_date",
  },
});
