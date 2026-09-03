import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timeRangeSchema, type TimeRange } from "./time-range.js";

export type SearchEventsFilter = {
  eventTypes?: string[] | null;
  merchantIds?: string[] | null;
  locationIds?: string[] | null;
  createdAt?: TimeRange;
};

export const searchEventsFilterSchema: Schema<SearchEventsFilter> = s.object<SearchEventsFilter>({
  eventTypes: s.optionalNullable(s.array(s.string())),
  merchantIds: s.optionalNullable(s.array(s.string())),
  locationIds: s.optionalNullable(s.array(s.string())),
  createdAt: s.optional(s.lazy(() => timeRangeSchema)),
  _keysMap: {
    eventTypes: "event_types",
    merchantIds: "merchant_ids",
    locationIds: "location_ids",
    createdAt: "created_at",
  },
});
