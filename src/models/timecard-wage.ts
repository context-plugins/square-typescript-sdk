import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

/** The hourly wage rate used to compensate a team member for a [timecard](entity:Timecard). */
export type TimecardWage = {
  /** The name of the job performed during this timecard. */
  title?: string | null;
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
   * The ID of the [job](entity:Job) performed for this timecard. Square labor-reporting UIs might
   * group timecards together by ID.
   */
  jobId?: string;
  /** Whether team members are eligible for tips when working this job. */
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
