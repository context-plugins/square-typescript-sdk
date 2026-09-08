import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { jobSchema, type Job } from "./job.js";

/** Represents an [UpdateJob](api-endpoint:Team-UpdateJob) request. */
export type UpdateJobRequest = {
  /**
   * Represents a job that can be assigned to [team members](entity:TeamMember). This object defines
   * the job's title and tip eligibility. Compensation is defined in a [job
   * assignment](entity:JobAssignment) in a team member's wage setting.
   */
  job: Job;
};

export const updateJobRequestSchema: Schema<UpdateJobRequest> = s.object<UpdateJobRequest>({
  job: jobSchema,
});
