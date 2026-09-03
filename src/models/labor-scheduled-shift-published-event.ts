import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  laborScheduledShiftPublishedEventDataSchema,
  type LaborScheduledShiftPublishedEventData,
} from "./labor-scheduled-shift-published-event-data.js";

export type LaborScheduledShiftPublishedEvent = {
  merchantId?: string | null;
  locationId?: string | null;
  type?: string | null;
  eventId?: string | null;
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
