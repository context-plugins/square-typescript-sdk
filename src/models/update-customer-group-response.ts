import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerGroupSchema, type CustomerGroup } from "./customer-group.js";
import { errorSchema, type Error } from "./error.js";

export type UpdateCustomerGroupResponse = {
  errors?: Error[];
  group?: CustomerGroup;
};

export const updateCustomerGroupResponseSchema: Schema<UpdateCustomerGroupResponse> =
  s.object<UpdateCustomerGroupResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    group: s.optional(s.lazy(() => customerGroupSchema)),
  });
