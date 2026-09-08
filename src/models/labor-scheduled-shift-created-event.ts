import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  laborScheduledShiftCreatedEventDataSchema,
  type LaborScheduledShiftCreatedEventData,
} from "./labor-scheduled-shift-created-event-data.js";

/** Published when a [ScheduledShift](entity:ScheduledShift) is created. */
export type LaborScheduledShiftCreatedEvent = {
  /** The ID of the merchant associated with the event. */
  merchantId?: string | null;
  /** The ID of the location associated with the event. */
  locationId?: string | null;
  /** The type of event. For this event, the value is `labor.scheduled_shift.created`. */
  type?: string | null;
  /** The unique ID for the event. */
  eventId?: string | null;
  /** The timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: LaborScheduledShiftCreatedEventData;
};

export const laborScheduledShiftCreatedEventSchema: Schema<LaborScheduledShiftCreatedEvent> =
  s.object<LaborScheduledShiftCreatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    locationId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => laborScheduledShiftCreatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      locationId: "location_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
