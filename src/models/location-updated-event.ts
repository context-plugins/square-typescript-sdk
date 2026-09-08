import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  locationUpdatedEventDataSchema,
  type LocationUpdatedEventData,
} from "./location-updated-event-data.js";

/** Published when a [Location](entity:Location) is updated. */
export type LocationUpdatedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The ID of the [Location](entity:Location) associated with the event. */
  locationId?: string | null;
  /** The type of event this represents, `"location.updated"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: LocationUpdatedEventData;
};

export const locationUpdatedEventSchema: Schema<LocationUpdatedEvent> = s.object<LocationUpdatedEvent>({
  merchantId: s.optionalNullable(s.string()),
  locationId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => locationUpdatedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    locationId: "location_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
