import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { jobSchema, type Job } from "./job.js";

export type RetrieveJobResponse = {
  job?: Job;
  errors?: Error[];
};

export const retrieveJobResponseSchema: Schema<RetrieveJobResponse> = s.object<RetrieveJobResponse>({
  job: s.optional(s.lazy(() => jobSchema)),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
