import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { employeeWageSchema, type EmployeeWage } from "./employee-wage.js";
import { errorSchema, type Error } from "./error.js";

/**
 * A response to a request to get an `EmployeeWage`. The response contains the requested
 * `EmployeeWage` objects and might contain a set of `Error` objects if the request resulted in
 * errors.
 */
export type GetEmployeeWageResponse = {
  /**
   * The hourly wage rate that an employee earns on a `Shift` for doing the job specified by the
   * `title` property of this object. Deprecated at version 2020-08-26. Use
   * [TeamMemberWage](entity:TeamMemberWage).
   */
  employeeWage?: EmployeeWage;
  /** Any errors that occurred during the request. */
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
