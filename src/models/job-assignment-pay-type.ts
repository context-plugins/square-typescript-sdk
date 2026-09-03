import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const JobAssignmentPayType = {
  None: "NONE",
  Hourly: "HOURLY",
  Salary: "SALARY",
} as const;
export type JobAssignmentPayType =
  | (typeof JobAssignmentPayType)[keyof typeof JobAssignmentPayType]
  | (string & {});

export const jobAssignmentPayTypeSchema: EnumSchema<JobAssignmentPayType> =
  s.enumOf<JobAssignmentPayType>(JobAssignmentPayType);
