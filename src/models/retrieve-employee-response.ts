import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { employeeSchema, type Employee } from "./employee.js";
import { errorSchema, type Error } from "./error.js";

export type RetrieveEmployeeResponse = {
  employee?: Employee;
  errors?: Error[];
};

export const retrieveEmployeeResponseSchema: Schema<RetrieveEmployeeResponse> =
  s.object<RetrieveEmployeeResponse>({
    employee: s.optional(s.lazy(() => employeeSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
