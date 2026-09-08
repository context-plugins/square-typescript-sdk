import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { jobSchema, type Job } from "./job.js";

/** Represents a [CreateJob](api-endpoint:Team-CreateJob) request. */
export type CreateJobRequest = {
  /**
   * Represents a job that can be assigned to [team members](entity:TeamMember). This object defines
   * the job's title and tip eligibility. Compensation is defined in a [job
   * assignment](entity:JobAssignment) in a team member's wage setting.
   */
  job: Job;
  /**
   * A unique identifier for the `CreateJob` request. Keys can be any valid string, but must be
   * unique for each request. For more information, see
   * [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
  idempotencyKey: string;
};

export const createJobRequestSchema: Schema<CreateJobRequest> = s.object<CreateJobRequest>({
  job: jobSchema,
  idempotencyKey: s.string(),
  _keysMap: {
    idempotencyKey: "idempotency_key",
  },
});
