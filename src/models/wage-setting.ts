import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { jobAssignmentSchema, type JobAssignment } from "./job-assignment.js";

export type WageSetting = {
  teamMemberId?: string | null;
  jobAssignments?: JobAssignment[] | null;
  isOvertimeExempt?: boolean | null;
  version?: number;
  createdAt?: string;
  updatedAt?: string;
};

export const wageSettingSchema: Schema<WageSetting> = s.object<WageSetting>({
  teamMemberId: s.optionalNullable(s.string()),
  jobAssignments: s.optionalNullable(s.array(s.lazy(() => jobAssignmentSchema))),
  isOvertimeExempt: s.optionalNullable(s.boolean()),
  version: s.optional(s.number()),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  _keysMap: {
    teamMemberId: "team_member_id",
    jobAssignments: "job_assignments",
    isOvertimeExempt: "is_overtime_exempt",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
