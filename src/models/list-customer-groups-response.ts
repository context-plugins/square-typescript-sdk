import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerGroupSchema, type CustomerGroup } from "./customer-group.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Defines the fields that are included in the response body of a request to the
 * [ListCustomerGroups](api-endpoint:CustomerGroups-ListCustomerGroups) endpoint.
 *
 * Either `errors` or `groups` is present in a given response (never both).
 */
export type ListCustomerGroupsResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** A list of customer groups belonging to the current seller. */
  groups?: CustomerGroup[];
  /**
   * A pagination cursor to retrieve the next set of results for your original query to the
   * endpoint. This value is present only if the request succeeded and additional results are
   * available.
   *
   * For more information, see
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
};

export const listCustomerGroupsResponseSchema: Schema<ListCustomerGroupsResponse> =
  s.object<ListCustomerGroupsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    groups: s.optional(s.array(s.lazy(() => customerGroupSchema))),
    cursor: s.optional(s.string()),
  });
