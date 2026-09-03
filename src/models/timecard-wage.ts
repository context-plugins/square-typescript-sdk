import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type TimecardWage = {
  title?: string | null;
  hourlyRate?: Money;
  jobId?: string;
  tipEligible?: boolean | null;
};

export const timecardWageSchema: Schema<TimecardWage> = s.object<TimecardWage>({
  title: s.optionalNullable(s.string()),
  hourlyRate: s.optional(s.lazy(() => moneySchema)),
  jobId: s.optional(s.string()),
  tipEligible: s.optionalNullable(s.boolean()),
  _keysMap: {
    hourlyRate: "hourly_rate",
    jobId: "job_id",
    tipEligible: "tip_eligible",
  },
});
