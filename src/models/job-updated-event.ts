import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { jobUpdatedEventDataSchema, type JobUpdatedEventData } from "./job-updated-event-data.js";

/** Published when a Job is updated. */
export type JobUpdatedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents, `"job.updated"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was created, in RFC 3339 format. */
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
