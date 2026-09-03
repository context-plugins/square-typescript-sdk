import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  laborScheduledShiftCreatedEventDataSchema,
  type LaborScheduledShiftCreatedEventData,
} from "./labor-scheduled-shift-created-event-data.js";

export type LaborScheduledShiftCreatedEvent = {
  merchantId?: string | null;
  locationId?: string | null;
  type?: string | null;
  eventId?: string | null;
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
