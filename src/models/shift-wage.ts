import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

/**
 * The hourly wage rate used to compensate an employee for this shift.
 *
 * Deprecated at Square API version 2025-05-21. See the [migration
 * notes](https://developer.squareup.com/docs/labor-api/what-it-does#migration-notes).
 */
export type ShiftWage = {
  /** The name of the job performed during this shift. */
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
   * The id of the job performed during this shift. Square labor-reporting UIs might group shifts
   * together by id.
   */
  jobId?: string;
  /** Whether team members are eligible for tips when working this job. */
  tipEligible?: boolean | null;
};

export const shiftWageSchema: Schema<ShiftWage> = s.object<ShiftWage>({
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
