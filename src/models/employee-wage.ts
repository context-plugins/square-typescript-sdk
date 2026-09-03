import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type EmployeeWage = {
  id?: string;
  employeeId?: string | null;
  title?: string | null;
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
