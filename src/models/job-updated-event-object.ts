import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { jobSchema, type Job } from "./job.js";

export type JobUpdatedEventObject = {
  job?: Job;
};

export const jobUpdatedEventObjectSchema: Schema<JobUpdatedEventObject> = s.object<JobUpdatedEventObject>({
  job: s.optional(s.lazy(() => jobSchema)),
});
