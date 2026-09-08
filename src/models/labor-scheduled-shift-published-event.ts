import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  laborScheduledShiftPublishedEventDataSchema,
  type LaborScheduledShiftPublishedEventData,
} from "./labor-scheduled-shift-published-event-data.js";

/** Published when a [ScheduledShift](entity:ScheduledShift) is published. */
export type LaborScheduledShiftPublishedEvent = {
  /** The ID of the merchant associated with the event. */
  merchantId?: string | null;
  /** The ID of the location associated with the event. */
  locationId?: string | null;
  /** The type of event. For this event, the value is `labor.scheduled_shift.published`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** The timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: LaborScheduledShiftPublishedEventData;
};

export const laborScheduledShiftPublishedEventSchema: Schema<LaborScheduledShiftPublishedEvent> =
  s.object<LaborScheduledShiftPublishedEvent>({
    merchantId: s.optionalNullable(s.string()),
    locationId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => laborScheduledShiftPublishedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      locationId: "location_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
