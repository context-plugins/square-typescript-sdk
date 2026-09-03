import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { weekdaySchema, type Weekday } from "./weekday.js";

export type WorkweekConfig = {
  id?: string;
  startOfWeek: Weekday;
  startOfDayLocalTime: string;
  version?: number;
  createdAt?: string;
  updatedAt?: string;
};

export const workweekConfigSchema: Schema<WorkweekConfig> = s.object<WorkweekConfig>({
  id: s.optional(s.string()),
  startOfWeek: weekdaySchema,
  startOfDayLocalTime: s.string(),
  version: s.optional(s.number()),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  _keysMap: {
    startOfWeek: "start_of_week",
    startOfDayLocalTime: "start_of_day_local_time",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
