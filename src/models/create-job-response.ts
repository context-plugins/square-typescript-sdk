import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { jobSchema, type Job } from "./job.js";

export type CreateJobResponse = {
  job?: Job;
  errors?: Error[];
};

export const createJobResponseSchema: Schema<CreateJobResponse> = s.object<CreateJobResponse>({
  job: s.optional(s.lazy(() => jobSchema)),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
