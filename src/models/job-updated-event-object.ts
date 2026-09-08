import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { jobSchema, type Job } from "./job.js";

export type JobUpdatedEventObject = {
  /**
   * Represents a job that can be assigned to [team members](entity:TeamMember). This object defines
   * the job's title and tip eligibility. Compensation is defined in a [job
   * assignment](entity:JobAssignment) in a team member's wage setting.
   */
  job?: Job;
};

export const jobUpdatedEventObjectSchema: Schema<JobUpdatedEventObject> = s.object<JobUpdatedEventObject>({
  job: s.optional(s.lazy(() => jobSchema)),
});
