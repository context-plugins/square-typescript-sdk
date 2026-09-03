import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type AddGroupToCustomerResponse = {
  errors?: Error[];
};

export const addGroupToCustomerResponseSchema: Schema<AddGroupToCustomerResponse> =
  s.object<AddGroupToCustomerResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
