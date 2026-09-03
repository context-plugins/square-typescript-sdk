import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TimeRange = {
  startAt?: string | null;
  endAt?: string | null;
};

export const timeRangeSchema: Schema<TimeRange> = s.object<TimeRange>({
  startAt: s.optionalNullable(s.string()),
  endAt: s.optionalNullable(s.string()),
  _keysMap: {
    startAt: "start_at",
    endAt: "end_at",
  },
});
