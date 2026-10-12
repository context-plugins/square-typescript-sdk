import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { weekdaySchema, type Weekday } from "./weekday.js";

/**
 * Sets the day of the week and hour of the day that a business starts a workweek. This is used to
 * calculate overtime pay.
 */
export type WorkweekConfig = {
  /** The UUID for this object. */
  id?: string;
  /** The days of the week. */
  startOfWeek: Weekday;
  /**
   * The local time at which a business week starts. Represented as a string in `HH:MM` format
   * (`HH:MM:SS` is also accepted, but seconds are truncated).
   */
  startOfDayLocalTime: string;
  /**
   * Used for resolving concurrency issues. The request fails if the version provided does not match
   * the server version at the time of the request. If not provided, Square executes a blind write;
   * potentially overwriting data from another write.
   */
  version?: number;
  /** A read-only timestamp in RFC 3339 format; presented in UTC. */
  createdAt?: string;
  /** A read-only timestamp in RFC 3339 format; presented in UTC. */
  updatedAt?: string;
};

export const workweekConfigSchema: Schema<WorkweekConfig> = s.object<WorkweekConfig>({
  id: s.optional(s.string()),
  startOfWeek: weekdaySchema,
  startOfDayLocalTime: s.string(),
  version: s.optional(s.int()),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  _keysMap: {
    startOfWeek: "start_of_week",
    startOfDayLocalTime: "start_of_day_local_time",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
