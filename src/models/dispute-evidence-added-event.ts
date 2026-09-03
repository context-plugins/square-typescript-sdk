import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  disputeEvidenceAddedEventDataSchema,
  type DisputeEvidenceAddedEventData,
} from "./dispute-evidence-added-event-data.js";

export type DisputeEvidenceAddedEvent = {
  merchantId?: string | null;
  locationId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: DisputeEvidenceAddedEventData;
};

export const disputeEvidenceAddedEventSchema: Schema<DisputeEvidenceAddedEvent> =
  s.object<DisputeEvidenceAddedEvent>({
    merchantId: s.optionalNullable(s.string()),
    locationId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => disputeEvidenceAddedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      locationId: "location_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
