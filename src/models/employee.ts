import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { employeeStatusSchema, type EmployeeStatus } from "./employee-status.js";

export type Employee = {
  id?: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  locationIds?: string[] | null;
  status?: EmployeeStatus;
  isOwner?: boolean | null;
  createdAt?: string;
  updatedAt?: string;
};

export const employeeSchema: Schema<Employee> = s.object<Employee>({
  id: s.optional(s.string()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  email: s.optionalNullable(s.string()),
  phoneNumber: s.optionalNullable(s.string()),
  locationIds: s.optionalNullable(s.array(s.string())),
  status: s.optional(s.lazy(() => employeeStatusSchema)),
  isOwner: s.optionalNullable(s.boolean()),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  _keysMap: {
    firstName: "first_name",
    lastName: "last_name",
    phoneNumber: "phone_number",
    locationIds: "location_ids",
    isOwner: "is_owner",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
