import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timeRangeSchema, type TimeRange } from "./time-range.js";

export type SearchOrdersDateTimeFilter = {
  createdAt?: TimeRange;
  updatedAt?: TimeRange;
  closedAt?: TimeRange;
};

export const searchOrdersDateTimeFilterSchema: Schema<SearchOrdersDateTimeFilter> =
  s.object<SearchOrdersDateTimeFilter>({
    createdAt: s.optional(s.lazy(() => timeRangeSchema)),
    updatedAt: s.optional(s.lazy(() => timeRangeSchema)),
    closedAt: s.optional(s.lazy(() => timeRangeSchema)),
    _keysMap: {
      createdAt: "created_at",
      updatedAt: "updated_at",
      closedAt: "closed_at",
    },
  });
