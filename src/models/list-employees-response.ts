import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { employeeSchema, type Employee } from "./employee.js";
import { errorSchema, type Error } from "./error.js";

export type ListEmployeesResponse = {
  employees?: Employee[];
  cursor?: string;
  errors?: Error[];
};

export const listEmployeesResponseSchema: Schema<ListEmployeesResponse> = s.object<ListEmployeesResponse>({
  employees: s.optional(s.array(s.lazy(() => employeeSchema))),
  cursor: s.optional(s.string()),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
