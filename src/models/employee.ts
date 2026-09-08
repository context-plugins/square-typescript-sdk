import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { employeeStatusSchema, type EmployeeStatus } from "./employee-status.js";

/**
 * An employee object that is used by the external API.
 *
 * DEPRECATED at version 2020-08-26. Replaced by [TeamMember](entity:TeamMember).
 */
export type Employee = {
  /** UUID for this object. */
  id?: string;
  /** The employee's first name. */
  firstName?: string | null;
  /** The employee's last name. */
  lastName?: string | null;
  /** The employee's email address */
  email?: string | null;
  /** The employee's phone number in E.164 format, i.e. "+12125554250" */
  phoneNumber?: string | null;
  /** A list of location IDs where this employee has access to. */
  locationIds?: string[] | null;
  /**
   * The status of the Employee being retrieved.
   *
   * DEPRECATED at version 2020-08-26. Replaced by [TeamMemberStatus](entity:TeamMemberStatus).
   */
  status?: EmployeeStatus;
  /**
   * Whether this employee is the owner of the merchant. Each merchant has one owner employee, and
   * that employee has full authority over the account.
   */
  isOwner?: boolean | null;
  /** A read-only timestamp in RFC 3339 format. */
  createdAt?: string;
  /** A read-only timestamp in RFC 3339 format. */
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
