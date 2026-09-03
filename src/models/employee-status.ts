import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EmployeeStatus = {
  Active: "ACTIVE",
  Inactive: "INACTIVE",
} as const;
export type EmployeeStatus = (typeof EmployeeStatus)[keyof typeof EmployeeStatus] | (string & {});

export const employeeStatusSchema: EnumSchema<EmployeeStatus> = s.enumOf<EmployeeStatus>(EmployeeStatus);
