import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { employeeWageSchema, type EmployeeWage } from "./employee-wage.js";
import { errorSchema, type Error } from "./error.js";

/**
 * The response to a request for a set of `EmployeeWage` objects. The response contains a set of
 * `EmployeeWage` objects.
 */
export type ListEmployeeWagesResponse = {
  /** A page of `EmployeeWage` results. */
  employeeWages?: EmployeeWage[];
  /**
   * The value supplied in the subsequent request to fetch the next page of `EmployeeWage` results.
   */
  cursor?: string;
  /** Any errors that occurred during the request. */
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
