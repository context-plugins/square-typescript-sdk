import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerGroupSchema, type CustomerGroup } from "./customer-group.js";
import { errorSchema, type Error } from "./error.js";

export type ListCustomerGroupsResponse = {
  errors?: Error[];
  groups?: CustomerGroup[];
  cursor?: string;
};

export const listCustomerGroupsResponseSchema: Schema<ListCustomerGroupsResponse> =
  s.object<ListCustomerGroupsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    groups: s.optional(s.array(s.lazy(() => customerGroupSchema))),
    cursor: s.optional(s.string()),
  });
