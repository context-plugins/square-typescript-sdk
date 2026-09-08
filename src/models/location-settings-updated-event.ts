import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  locationSettingsUpdatedEventDataSchema,
  type LocationSettingsUpdatedEventData,
} from "./location-settings-updated-event-data.js";

/** Published when online checkout location settings are updated */
export type LocationSettingsUpdatedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents, `"online_checkout.location_settings.updated"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** RFC 3339 timestamp of when the event was created. */
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
