import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  laborScheduledShiftUpdatedEventDataSchema,
  type LaborScheduledShiftUpdatedEventData,
} from "./labor-scheduled-shift-updated-event-data.js";

export type LaborScheduledShiftUpdatedEvent = {
  merchantId?: string | null;
  locationId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: LaborScheduledShiftUpdatedEventData;
};

export const laborScheduledShiftUpdatedEventSchema: Schema<LaborScheduledShiftUpdatedEvent> =
  s.object<LaborScheduledShiftUpdatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    locationId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => laborScheduledShiftUpdatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      locationId: "location_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
