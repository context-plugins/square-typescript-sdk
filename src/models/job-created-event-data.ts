import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { jobCreatedEventObjectSchema, type JobCreatedEventObject } from "./job-created-event-object.js";

export type JobCreatedEventData = {
  /** Name of the affected object’s type, `"job"`. */
  type?: string | null;
  /** ID of the created job. */
  id?: string;
  object?: JobCreatedEventObject;
};

export const jobCreatedEventDataSchema: Schema<JobCreatedEventData> = s.object<JobCreatedEventData>({
  type: s.optionalNullable(s.string()),
  id: s.optional(s.string()),
  object: s.optional(s.lazy(() => jobCreatedEventObjectSchema)),
});
