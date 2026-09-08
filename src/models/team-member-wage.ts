import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

/**
 * Job and wage information for a [team member](entity:TeamMember). This convenience object provides
 * details needed to specify the `wage` field for a [timecard](entity:Timecard).
 */
export type TeamMemberWage = {
  /** The UUID for this object. */
  id?: string;
  /** The `TeamMember` that this wage is assigned to. */
  teamMemberId?: string | null;
  /** The job title that this wage relates to. */
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
  /** An identifier for the [job](entity:Job) that this wage relates to. */
  jobId?: string | null;
  /** Whether team members are eligible for tips when working this job. */
  tipEligible?: boolean | null;
};

export const teamMemberWageSchema: Schema<TeamMemberWage> = s.object<TeamMemberWage>({
  id: s.optional(s.string()),
  teamMemberId: s.optionalNullable(s.string()),
  title: s.optionalNullable(s.string()),
  hourlyRate: s.optional(s.lazy(() => moneySchema)),
  jobId: s.optionalNullable(s.string()),
  tipEligible: s.optionalNullable(s.boolean()),
  _keysMap: {
    teamMemberId: "team_member_id",
    hourlyRate: "hourly_rate",
    jobId: "job_id",
    tipEligible: "tip_eligible",
  },
});
