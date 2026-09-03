import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { jobUpdatedEventObjectSchema, type JobUpdatedEventObject } from "./job-updated-event-object.js";

export type JobUpdatedEventData = {
  type?: string | null;
  id?: string;
  object?: JobUpdatedEventObject;
};

export const jobUpdatedEventDataSchema: Schema<JobUpdatedEventData> = s.object<JobUpdatedEventData>({
  type: s.optionalNullable(s.string()),
  id: s.optional(s.string()),
  object: s.optional(s.lazy(() => jobUpdatedEventObjectSchema)),
});
