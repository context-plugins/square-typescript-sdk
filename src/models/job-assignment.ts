import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { jobAssignmentPayTypeSchema, type JobAssignmentPayType } from "./job-assignment-pay-type.js";
import { moneySchema, type Money } from "./money.js";

/**
 * Represents a job assigned to a [team member](entity:TeamMember), including the compensation the
 * team member earns for the job. Job assignments are listed in the team member's [wage
 * setting](entity:WageSetting).
 */
export type JobAssignment = {
  /** The title of the job. */
  jobTitle?: string | null;
  /** Enumerates the possible pay types that a job can be assigned. */
  payType: JobAssignmentPayType;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  hourlyRate?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  annualRate?: Money;
  /** The planned hours per week for the job. Set if the job `PayType` is `SALARY`. */
  weeklyHours?: number | null;
  /** The ID of the [job](entity:Job). */
  jobId?: string | null;
};

export const jobAssignmentSchema: Schema<JobAssignment> = s.object<JobAssignment>({
  jobTitle: s.optionalNullable(s.string()),
  payType: jobAssignmentPayTypeSchema,
  hourlyRate: s.optional(s.lazy(() => moneySchema)),
  annualRate: s.optional(s.lazy(() => moneySchema)),
  weeklyHours: s.optionalNullable(s.number()),
  jobId: s.optionalNullable(s.string()),
  _keysMap: {
    jobTitle: "job_title",
    payType: "pay_type",
    hourlyRate: "hourly_rate",
    annualRate: "annual_rate",
    weeklyHours: "weekly_hours",
    jobId: "job_id",
  },
});
