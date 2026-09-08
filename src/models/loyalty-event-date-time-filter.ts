import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timeRangeSchema, type TimeRange } from "./time-range.js";

/** Filter events by date time range. */
export type LoyaltyEventDateTimeFilter = {
  /**
   * Represents a generic time range. The start and end values are represented in RFC 3339 format.
   * Time ranges are customized to be inclusive or exclusive based on the needs of a particular
   * endpoint. Refer to the relevant endpoint-specific documentation to determine how time ranges
   * are handled.
   */
  createdAt: TimeRange;
};

export const loyaltyEventDateTimeFilterSchema: Schema<LoyaltyEventDateTimeFilter> =
  s.object<LoyaltyEventDateTimeFilter>({
    createdAt: timeRangeSchema,
    _keysMap: {
      createdAt: "created_at",
    },
  });
