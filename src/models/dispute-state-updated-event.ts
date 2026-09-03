import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  disputeStateUpdatedEventDataSchema,
  type DisputeStateUpdatedEventData,
} from "./dispute-state-updated-event-data.js";

export type DisputeStateUpdatedEvent = {
  merchantId?: string | null;
  locationId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: DisputeStateUpdatedEventData;
};

export const disputeStateUpdatedEventSchema: Schema<DisputeStateUpdatedEvent> =
  s.object<DisputeStateUpdatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    locationId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => disputeStateUpdatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      locationId: "location_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
