import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enumerates the possible pay types that a job can be assigned. */
export const JobAssignmentPayType = {
  /** The job does not have a defined pay type. */
  None: "NONE",
  /** The job pays an hourly rate. */
  Hourly: "HOURLY",
  /** The job pays an annual salary. */
  Salary: "SALARY",
} as const;
export type JobAssignmentPayType =
  | (typeof JobAssignmentPayType)[keyof typeof JobAssignmentPayType]
  | (string & {});

export const jobAssignmentPayTypeSchema: EnumSchema<JobAssignmentPayType> =
  s.enumOf<JobAssignmentPayType>(JobAssignmentPayType);
