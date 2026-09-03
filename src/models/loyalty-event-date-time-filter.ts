import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timeRangeSchema, type TimeRange } from "./time-range.js";

export type LoyaltyEventDateTimeFilter = {
  createdAt: TimeRange;
};

export const loyaltyEventDateTimeFilterSchema: Schema<LoyaltyEventDateTimeFilter> =
  s.object<LoyaltyEventDateTimeFilter>({
    createdAt: timeRangeSchema,
    _keysMap: {
      createdAt: "created_at",
    },
  });
