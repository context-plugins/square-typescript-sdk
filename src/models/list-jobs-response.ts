import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { jobSchema, type Job } from "./job.js";

export type ListJobsResponse = {
  jobs?: Job[];
  cursor?: string;
  errors?: Error[];
};

export const listJobsResponseSchema: Schema<ListJobsResponse> = s.object<ListJobsResponse>({
  jobs: s.optional(s.array(s.lazy(() => jobSchema))),
  cursor: s.optional(s.string()),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
