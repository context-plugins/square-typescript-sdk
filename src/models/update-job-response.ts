import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { jobSchema, type Job } from "./job.js";

/**
 * Represents an [UpdateJob](api-endpoint:Team-UpdateJob) response. Either `job` or `errors` is
 * present in the response.
 */
export type UpdateJobResponse = {
  /**
   * Represents a job that can be assigned to [team members](entity:TeamMember). This object defines
   * the job's title and tip eligibility. Compensation is defined in a [job
   * assignment](entity:JobAssignment) in a team member's wage setting.
   */
  job?: Job;
  /** The errors that occurred during the request. */
  errors?: Error[];
};

export const updateJobResponseSchema: Schema<UpdateJobResponse> = s.object<UpdateJobResponse>({
  job: s.optional(s.lazy(() => jobSchema)),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
