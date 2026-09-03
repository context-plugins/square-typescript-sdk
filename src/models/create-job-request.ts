import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { jobSchema, type Job } from "./job.js";

export type CreateJobRequest = {
  job: Job;
  idempotencyKey: string;
};

export const createJobRequestSchema: Schema<CreateJobRequest> = s.object<CreateJobRequest>({
  job: jobSchema,
  idempotencyKey: s.string(),
  _keysMap: {
    idempotencyKey: "idempotency_key",
  },
});
