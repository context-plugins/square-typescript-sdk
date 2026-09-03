import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  disputeEvidenceRemovedEventDataSchema,
  type DisputeEvidenceRemovedEventData,
} from "./dispute-evidence-removed-event-data.js";

export type DisputeEvidenceRemovedEvent = {
  merchantId?: string | null;
  locationId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: DisputeEvidenceRemovedEventData;
};

export const disputeEvidenceRemovedEventSchema: Schema<DisputeEvidenceRemovedEvent> =
  s.object<DisputeEvidenceRemovedEvent>({
    merchantId: s.optionalNullable(s.string()),
    locationId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => disputeEvidenceRemovedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      locationId: "location_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
