import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  laborTimecardCreatedEventDataSchema,
  type LaborTimecardCreatedEventData,
} from "./labor-timecard-created-event-data.js";

export type LaborTimecardCreatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
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
