import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  laborTimecardDeletedEventDataSchema,
  type LaborTimecardDeletedEventData,
} from "./labor-timecard-deleted-event-data.js";

export type LaborTimecardDeletedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
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
