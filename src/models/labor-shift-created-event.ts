import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  laborShiftCreatedEventDataSchema,
  type LaborShiftCreatedEventData,
} from "./labor-shift-created-event-data.js";

/**
 * Published when a worker starts a [Shift](entity:Shift).
 *
 * Deprecated at Square API version 2025-05-21. Replaced by `labor.timecard.created`.
 */
export type LaborShiftCreatedEvent = {
  /** The ID of the merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event. For this event, the value is `labor.shift.created`. */
  type?: string | null;
  /** The unique ID for the event. */
  eventId?: string | null;
  /** The timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: LaborShiftCreatedEventData;
};

export const laborShiftCreatedEventSchema: Schema<LaborShiftCreatedEvent> = s.object<LaborShiftCreatedEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => laborShiftCreatedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
