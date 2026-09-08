import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  disputeEvidenceDeletedEventDataSchema,
  type DisputeEvidenceDeletedEventData,
} from "./dispute-evidence-deleted-event-data.js";

/**
 * Published when evidence is removed from a [Dispute](entity:Dispute) from the Disputes Dashboard
 * in the Seller Dashboard, the Square Point of Sale app, or by calling
 * [DeleteDisputeEvidence](api-endpoint:Disputes-DeleteDisputeEvidence).
 */
export type DisputeEvidenceDeletedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The ID of the target location associated with the event. */
  locationId?: string | null;
  /** The type of event this represents. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: DisputeEvidenceDeletedEventData;
};

export const disputeEvidenceDeletedEventSchema: Schema<DisputeEvidenceDeletedEvent> =
  s.object<DisputeEvidenceDeletedEvent>({
    merchantId: s.optionalNullable(s.string()),
    locationId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => disputeEvidenceDeletedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      locationId: "location_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
