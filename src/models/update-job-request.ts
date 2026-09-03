import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { jobSchema, type Job } from "./job.js";

export type UpdateJobRequest = {
  job: Job;
};

export const updateJobRequestSchema: Schema<UpdateJobRequest> = s.object<UpdateJobRequest>({
  job: jobSchema,
});
