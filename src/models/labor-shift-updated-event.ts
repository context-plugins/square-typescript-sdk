import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  laborShiftUpdatedEventDataSchema,
  type LaborShiftUpdatedEventData,
} from "./labor-shift-updated-event-data.js";

/**
 * Published when a [Shift](entity:Shift) is updated.
 *
 * Deprecated at Square API version 2025-05-21. Replaced by `labor.timecard.updated`.
 */
export type LaborShiftUpdatedEvent = {
  /** The ID of the merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event. For this event, the value is `labor.shift.updated`. */
  type?: string | null;
  /** The unique ID for the event. */
  eventId?: string | null;
  /** The timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: LaborShiftUpdatedEventData;
};

export const laborShiftUpdatedEventSchema: Schema<LaborShiftUpdatedEvent> = s.object<LaborShiftUpdatedEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => laborShiftUpdatedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
