import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerGroupSchema, type CustomerGroup } from "./customer-group.js";

/**
 * Defines the body parameters that can be included in a request to the
 * [CreateCustomerGroup](api-endpoint:CustomerGroups-CreateCustomerGroup) endpoint.
 */
export type CreateCustomerGroupRequest = {
  /**
   * The idempotency key for the request. For more information, see
   * [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
  idempotencyKey?: string;
  /**
   * Represents a group of customer profiles.
   *
   * Customer groups can be created, be modified, and have their membership defined using the
   * Customers API or within the Customer Directory in the Square Seller Dashboard or Point of Sale.
   */
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
