import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { employeeSchema, type Employee } from "./employee.js";
import { errorSchema, type Error } from "./error.js";

export type RetrieveEmployeeResponse = {
  /**
   * An employee object that is used by the external API.
   *
   * DEPRECATED at version 2020-08-26. Replaced by [TeamMember](entity:TeamMember).
   */
  employee?: Employee;
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const retrieveEmployeeResponseSchema: Schema<RetrieveEmployeeResponse> =
  s.object<RetrieveEmployeeResponse>({
    employee: s.optional(s.lazy(() => employeeSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
