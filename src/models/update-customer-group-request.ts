import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerGroupSchema, type CustomerGroup } from "./customer-group.js";

export type UpdateCustomerGroupRequest = {
  group: CustomerGroup;
};

export const updateCustomerGroupRequestSchema: Schema<UpdateCustomerGroupRequest> =
  s.object<UpdateCustomerGroupRequest>({
    group: customerGroupSchema,
  });
