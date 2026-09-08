import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerGroupSchema, type CustomerGroup } from "./customer-group.js";

/**
 * Defines the body parameters that can be included in a request to the
 * [UpdateCustomerGroup](api-endpoint:CustomerGroups-UpdateCustomerGroup) endpoint.
 */
export type UpdateCustomerGroupRequest = {
  /**
   * Represents a group of customer profiles.
   *
   * Customer groups can be created, be modified, and have their membership defined using the
   * Customers API or within the Customer Directory in the Square Seller Dashboard or Point of Sale.
   */
  group: CustomerGroup;
};

export const updateCustomerGroupRequestSchema: Schema<UpdateCustomerGroupRequest> =
  s.object<UpdateCustomerGroupRequest>({
    group: customerGroupSchema,
  });
