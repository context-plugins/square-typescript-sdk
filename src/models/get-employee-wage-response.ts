import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { employeeWageSchema, type EmployeeWage } from "./employee-wage.js";
import { errorSchema, type Error } from "./error.js";

export type GetEmployeeWageResponse = {
  employeeWage?: EmployeeWage;
  errors?: Error[];
};

export const getEmployeeWageResponseSchema: Schema<GetEmployeeWageResponse> =
  s.object<GetEmployeeWageResponse>({
    employeeWage: s.optional(s.lazy(() => employeeWageSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      employeeWage: "employee_wage",
    },
  });
