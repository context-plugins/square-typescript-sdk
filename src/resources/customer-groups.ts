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
    body: CreateCustomerGroupRequest;
  };

  export type DeleteCustomerGroupRequest = {
    groupId: string;
  };

  export type ListCustomerGroupsRequest = {
    cursor?: string;
    limit?: number;
  };

  export type RetrieveCustomerGroupRequest = {
    groupId: string;
  };

  export type UpdateCustomerGroupRequestParams = {
    groupId: string;
    body: UpdateCustomerGroupRequest;
  };
}
