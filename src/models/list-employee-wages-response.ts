import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { employeeWageSchema, type EmployeeWage } from "./employee-wage.js";
import { errorSchema, type Error } from "./error.js";

export type ListEmployeeWagesResponse = {
  employeeWages?: EmployeeWage[];
  cursor?: string;
  errors?: Error[];
};

export const listEmployeeWagesResponseSchema: Schema<ListEmployeeWagesResponse> =
  s.object<ListEmployeeWagesResponse>({
    employeeWages: s.optional(s.array(s.lazy(() => employeeWageSchema))),
    cursor: s.optional(s.string()),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      employeeWages: "employee_wages",
    },
  });
