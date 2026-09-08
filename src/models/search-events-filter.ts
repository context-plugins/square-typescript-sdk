import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timeRangeSchema, type TimeRange } from "./time-range.js";

/** Criteria to filter events by. */
export type SearchEventsFilter = {
  /** Filter events by event types. */
  eventTypes?: string[] | null;
  /** Filter events by merchant. */
  merchantIds?: string[] | null;
  /** Filter events by location. */
  locationIds?: string[] | null;
  /**
   * Represents a generic time range. The start and end values are represented in RFC 3339 format.
   * Time ranges are customized to be inclusive or exclusive based on the needs of a particular
   * endpoint. Refer to the relevant endpoint-specific documentation to determine how time ranges
   * are handled.
   */
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
