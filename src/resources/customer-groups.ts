import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  createCustomerGroupRequestSchema,
  type CreateCustomerGroupRequest,
} from "../models/create-customer-group-request.js";
import {
  createCustomerGroupResponseSchema,
  type CreateCustomerGroupResponse,
} from "../models/create-customer-group-response.js";
import {
  deleteCustomerGroupResponseSchema,
  type DeleteCustomerGroupResponse,
} from "../models/delete-customer-group-response.js";
import {
  listCustomerGroupsResponseSchema,
  type ListCustomerGroupsResponse,
} from "../models/list-customer-groups-response.js";
import {
  retrieveCustomerGroupResponseSchema,
  type RetrieveCustomerGroupResponse,
} from "../models/retrieve-customer-group-response.js";
import {
  updateCustomerGroupRequestSchema,
  type UpdateCustomerGroupRequest,
} from "../models/update-customer-group-request.js";
import {
  updateCustomerGroupResponseSchema,
  type UpdateCustomerGroupResponse,
} from "../models/update-customer-group-response.js";
import type { Servers } from "../servers.js";

export class CustomerGroups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * CreateCustomerGroup
   *
   * @remarks
   * Creates a new customer group for a business.
   *
   * The request must include the `name` value of the group.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  createCustomerGroup(
    request: CustomerGroups.CreateCustomerGroupRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateCustomerGroupResponse, ResponseError> {
    return this.#rawClient.execute<CreateCustomerGroupResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/customers/groups"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createCustomerGroupRequestSchema },
      },
      {
        success: { kind: "json", schema: createCustomerGroupResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * DeleteCustomerGroup
   *
   * @remarks
   * Deletes a customer group as identified by the `group_id` value.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  deleteCustomerGroup(
    request: CustomerGroups.DeleteCustomerGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteCustomerGroupResponse, ResponseError> {
    return this.#rawClient.execute<DeleteCustomerGroupResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/customers/groups/{group_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "group_id", value: request.groupId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteCustomerGroupResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * ListCustomerGroups
   *
   * @remarks
   * Retrieves the list of customer groups of a business.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  listCustomerGroups(
    request: CustomerGroups.ListCustomerGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCustomerGroupsResponse, ResponseError> {
    return this.#rawClient.execute<ListCustomerGroupsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/customers/groups"),
        auth: this.#auth.oauth2,
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCustomerGroupsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * RetrieveCustomerGroup
   *
   * @remarks
   * Retrieves a specific customer group as identified by the `group_id` value.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  retrieveCustomerGroup(
    request: CustomerGroups.RetrieveCustomerGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveCustomerGroupResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveCustomerGroupResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/customers/groups/{group_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "group_id", value: request.groupId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveCustomerGroupResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * UpdateCustomerGroup
   *
   * @remarks
   * Updates a customer group as identified by the `group_id` value.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  updateCustomerGroup(
    request: CustomerGroups.UpdateCustomerGroupRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateCustomerGroupResponse, ResponseError> {
    return this.#rawClient.execute<UpdateCustomerGroupResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/customers/groups/{group_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "group_id", value: request.groupId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateCustomerGroupRequestSchema },
      },
      {
        success: { kind: "json", schema: updateCustomerGroupResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace CustomerGroups {
  export type CreateCustomerGroupRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateCustomerGroupRequest;
  };

  export type DeleteCustomerGroupRequest = {
    /** The ID of the customer group to delete. */
    groupId: string;
  };

  export type ListCustomerGroupsRequest = {
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this cursor to
     * retrieve the next set of results for your original query.
     *
     * For more information, see
     * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
    /**
     * The maximum number of results to return in a single page. This limit is advisory. The
     * response might contain more or fewer results. If the limit is less than 1 or greater than 50,
     * Square returns a `400 VALUE_TOO_LOW` or `400 VALUE_TOO_HIGH` error. The default value is 50.
     *
     * For more information, see
     * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    limit?: number;
  };

  export type RetrieveCustomerGroupRequest = {
    /** The ID of the customer group to retrieve. */
    groupId: string;
  };

  export type UpdateCustomerGroupRequestParams = {
    /** The ID of the customer group to update. */
    groupId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateCustomerGroupRequest;
  };
}
