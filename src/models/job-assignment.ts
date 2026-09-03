import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { jobAssignmentPayTypeSchema, type JobAssignmentPayType } from "./job-assignment-pay-type.js";
import { moneySchema, type Money } from "./money.js";

export type JobAssignment = {
  jobTitle?: string | null;
  payType: JobAssignmentPayType;
  hourlyRate?: Money;
  annualRate?: Money;
  weeklyHours?: number | null;
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
