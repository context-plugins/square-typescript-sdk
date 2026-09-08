import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerGroupSchema, type CustomerGroup } from "./customer-group.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Defines the fields that are included in the response body of a request to the
 * [RetrieveCustomerGroup](api-endpoint:CustomerGroups-RetrieveCustomerGroup) endpoint.
 *
 * Either `errors` or `group` is present in a given response (never both).
 */
export type RetrieveCustomerGroupResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * Represents a group of customer profiles.
   *
   * Customer groups can be created, be modified, and have their membership defined using the
   * Customers API or within the Customer Directory in the Square Seller Dashboard or Point of Sale.
   */
  group?: CustomerGroup;
};

export const retrieveCustomerGroupResponseSchema: Schema<RetrieveCustomerGroupResponse> =
  s.object<RetrieveCustomerGroupResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    group: s.optional(s.lazy(() => customerGroupSchema)),
  });
