import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerGroupSchema, type CustomerGroup } from "./customer-group.js";

export type CreateCustomerGroupRequest = {
  idempotencyKey?: string;
  group: CustomerGroup;
};

export const createCustomerGroupRequestSchema: Schema<CreateCustomerGroupRequest> =
  s.object<CreateCustomerGroupRequest>({
    idempotencyKey: s.optional(s.string()),
    group: customerGroupSchema,
    _keysMap: {
      idempotencyKey: "idempotency_key",
    },
  });
