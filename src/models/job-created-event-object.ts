import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { jobSchema, type Job } from "./job.js";

export type JobCreatedEventObject = {
  job?: Job;
};

export const jobCreatedEventObjectSchema: Schema<JobCreatedEventObject> = s.object<JobCreatedEventObject>({
  job: s.optional(s.lazy(() => jobSchema)),
});
