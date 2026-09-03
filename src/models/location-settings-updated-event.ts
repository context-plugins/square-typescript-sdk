import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  locationSettingsUpdatedEventDataSchema,
  type LocationSettingsUpdatedEventData,
} from "./location-settings-updated-event-data.js";

export type LocationSettingsUpdatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: LocationSettingsUpdatedEventData;
};

export const locationSettingsUpdatedEventSchema: Schema<LocationSettingsUpdatedEvent> =
  s.object<LocationSettingsUpdatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => locationSettingsUpdatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
