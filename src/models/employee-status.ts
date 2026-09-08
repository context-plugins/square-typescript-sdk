import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the Employee being retrieved.
 *
 * DEPRECATED at version 2020-08-26. Replaced by [TeamMemberStatus](entity:TeamMemberStatus).
 */
export const EmployeeStatus = {
  /** Specifies that the employee is in the Active state. */
  Active: "ACTIVE",
  /** Specifies that the employee is in the Inactive state. */
  Inactive: "INACTIVE",
} as const;
export type EmployeeStatus = (typeof EmployeeStatus)[keyof typeof EmployeeStatus] | (string & {});

export const employeeStatusSchema: EnumSchema<EmployeeStatus> = s.enumOf<EmployeeStatus>(EmployeeStatus);
