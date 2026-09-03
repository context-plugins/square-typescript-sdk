import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { jobUpdatedEventDataSchema, type JobUpdatedEventData } from "./job-updated-event-data.js";

export type JobUpdatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: JobUpdatedEventData;
};

export const jobUpdatedEventSchema: Schema<JobUpdatedEvent> = s.object<JobUpdatedEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => jobUpdatedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
