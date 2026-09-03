import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { jobCreatedEventObjectSchema, type JobCreatedEventObject } from "./job-created-event-object.js";

export type JobCreatedEventData = {
  type?: string | null;
  id?: string;
  object?: JobCreatedEventObject;
};

export const jobCreatedEventDataSchema: Schema<JobCreatedEventData> = s.object<JobCreatedEventData>({
  type: s.optionalNullable(s.string()),
  id: s.optional(s.string()),
  object: s.optional(s.lazy(() => jobCreatedEventObjectSchema)),
});
