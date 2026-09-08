import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

/**
 * The hourly wage rate that an employee earns on a `Shift` for doing the job specified by the
 * `title` property of this object. Deprecated at version 2020-08-26. Use
 * [TeamMemberWage](entity:TeamMemberWage).
 */
export type EmployeeWage = {
  /** The UUID for this object. */
  id?: string;
  /** The `Employee` that this wage is assigned to. */
  employeeId?: string | null;
  /** The job title that this wage relates to. */
  title?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  hourlyRate?: Money;
};

export const employeeWageSchema: Schema<EmployeeWage> = s.object<EmployeeWage>({
  id: s.optional(s.string()),
  employeeId: s.optionalNullable(s.string()),
  title: s.optionalNullable(s.string()),
  hourlyRate: s.optional(s.lazy(() => moneySchema)),
  _keysMap: {
    employeeId: "employee_id",
    hourlyRate: "hourly_rate",
  },
});
