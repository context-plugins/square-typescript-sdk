import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type TeamMemberWage = {
  id?: string;
  teamMemberId?: string | null;
  title?: string | null;
  hourlyRate?: Money;
  jobId?: string | null;
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
