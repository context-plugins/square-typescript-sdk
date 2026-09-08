import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  laborTimecardCreatedEventDataSchema,
  type LaborTimecardCreatedEventData,
} from "./labor-timecard-created-event-data.js";

/** Published when a worker starts a [Timecard](entity:Timecard). */
export type LaborTimecardCreatedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event. For this event, the value is `labor.timecard.created`. */
  type?: string | null;
  /** The unique ID for the event. */
  eventId?: string | null;
  /** The timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: LaborTimecardCreatedEventData;
};

export const laborTimecardCreatedEventSchema: Schema<LaborTimecardCreatedEvent> =
  s.object<LaborTimecardCreatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => laborTimecardCreatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
