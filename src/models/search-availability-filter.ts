import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { segmentFilterSchema, type SegmentFilter } from "./segment-filter.js";
import { timeRangeSchema, type TimeRange } from "./time-range.js";

export type SearchAvailabilityFilter = {
  startAtRange: TimeRange;
  locationId?: string | null;
  segmentFilters?: SegmentFilter[] | null;
  bookingId?: string | null;
};

export const searchAvailabilityFilterSchema: Schema<SearchAvailabilityFilter> =
  s.object<SearchAvailabilityFilter>({
    startAtRange: timeRangeSchema,
    locationId: s.optionalNullable(s.string()),
    segmentFilters: s.optionalNullable(s.array(s.lazy(() => segmentFilterSchema))),
    bookingId: s.optionalNullable(s.string()),
    _keysMap: {
      startAtRange: "start_at_range",
      locationId: "location_id",
      segmentFilters: "segment_filters",
      bookingId: "booking_id",
    },
  });
