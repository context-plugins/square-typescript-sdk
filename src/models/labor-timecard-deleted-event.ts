import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  laborTimecardDeletedEventDataSchema,
  type LaborTimecardDeletedEventData,
} from "./labor-timecard-deleted-event-data.js";

/** Published when a [Timecard](entity:Timecard) is deleted. */
export type LaborTimecardDeletedEvent = {
  /** The ID of the merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event. For this event, the value is `labor.timecard.deleted`. */
  type?: string | null;
  /** The unique ID for the event. */
  eventId?: string | null;
  /** The timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: LaborTimecardDeletedEventData;
};

export const laborTimecardDeletedEventSchema: Schema<LaborTimecardDeletedEvent> =
  s.object<LaborTimecardDeletedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => laborTimecardDeletedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
