import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  laborScheduledShiftDeletedEventDataSchema,
  type LaborScheduledShiftDeletedEventData,
} from "./labor-scheduled-shift-deleted-event-data.js";

export type LaborScheduledShiftDeletedEvent = {
  merchantId?: string | null;
  locationId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: LaborScheduledShiftDeletedEventData;
};

export const laborScheduledShiftDeletedEventSchema: Schema<LaborScheduledShiftDeletedEvent> =
  s.object<LaborScheduledShiftDeletedEvent>({
    merchantId: s.optionalNullable(s.string()),
    locationId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => laborScheduledShiftDeletedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      locationId: "location_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
