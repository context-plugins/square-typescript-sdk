import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  laborTimecardUpdatedEventDataSchema,
  type LaborTimecardUpdatedEventData,
} from "./labor-timecard-updated-event-data.js";

export type LaborTimecardUpdatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: LaborTimecardUpdatedEventData;
};

export const laborTimecardUpdatedEventSchema: Schema<LaborTimecardUpdatedEvent> =
  s.object<LaborTimecardUpdatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => laborTimecardUpdatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
