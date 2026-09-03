import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { jobCreatedEventDataSchema, type JobCreatedEventData } from "./job-created-event-data.js";

export type JobCreatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: JobCreatedEventData;
};

export const jobCreatedEventSchema: Schema<JobCreatedEvent> = s.object<JobCreatedEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => jobCreatedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
