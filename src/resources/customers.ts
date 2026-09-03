import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  addGroupToCustomerResponseSchema,
  type AddGroupToCustomerResponse,
} from "../models/add-group-to-customer-response.js";
import {
  bulkCreateCustomersRequestSchema,
  type BulkCreateCustomersRequest,
} from "../models/bulk-create-customers-request.js";
import {
  bulkCreateCustomersResponseSchema,
  type BulkCreateCustomersResponse,
} from "../models/bulk-create-customers-response.js";
import {
  bulkDeleteCustomersRequestSchema,
  type BulkDeleteCustomersRequest,
} from "../models/bulk-delete-customers-request.js";
import {
  bulkDeleteCustomersResponseSchema,
  type BulkDeleteCustomersResponse,
} from "../models/bulk-delete-customers-response.js";
import {
  bulkRetrieveCustomersRequestSchema,
  type BulkRetrieveCustomersRequest,
} from "../models/bulk-retrieve-customers-request.js";
import {
  bulkRetrieveCustomersResponseSchema,
  type BulkRetrieveCustomersResponse,
} from "../models/bulk-retrieve-customers-response.js";
import {
  bulkUpdateCustomersRequestSchema,
  type BulkUpdateCustomersRequest,
} from "../models/bulk-update-customers-request.js";
import {
  bulkUpdateCustomersResponseSchema,
  type BulkUpdateCustomersResponse,
} from "../models/bulk-update-customers-response.js";
import {
  createCustomerCardRequestSchema,
  type CreateCustomerCardRequest,
} from "../models/create-customer-card-request.js";
import {
  createCustomerCardResponseSchema,
  type CreateCustomerCardResponse,
} from "../models/create-customer-card-response.js";
import {
  createCustomerRequestSchema,
  type CreateCustomerRequest,
} from "../models/create-customer-request.js";
import {
  createCustomerResponseSchema,
  type CreateCustomerResponse,
} from "../models/create-customer-response.js";
import { customerSortFieldSchema, type CustomerSortField } from "../models/customer-sort-field.js";
import {
  deleteCustomerCardResponseSchema,
  type DeleteCustomerCardResponse,
} from "../models/delete-customer-card-response.js";
import {
  deleteCustomerResponseSchema,
  type DeleteCustomerResponse,
} from "../models/delete-customer-response.js";
import {
  listCustomersResponseSchema,
  type ListCustomersResponse,
} from "../models/list-customers-response.js";
import {
  removeGroupFromCustomerResponseSchema,
  type RemoveGroupFromCustomerResponse,
} from "../models/remove-group-from-customer-response.js";
import {
  retrieveCustomerResponseSchema,
  type RetrieveCustomerResponse,
} from "../models/retrieve-customer-response.js";
import {
  searchCustomersRequestSchema,
  type SearchCustomersRequest,
} from "../models/search-customers-request.js";
import {
  searchCustomersResponseSchema,
  type SearchCustomersResponse,
} from "../models/search-customers-response.js";
import { sortOrderSchema, type SortOrder } from "../models/sort-order.js";
import {
  updateCustomerRequestSchema,
  type UpdateCustomerRequest,
} from "../models/update-customer-request.js";
import {
  updateCustomerResponseSchema,
  type UpdateCustomerResponse,
} from "../models/update-customer-response.js";
import type { Servers } from "../servers.js";

export class Customers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addGroupToCustomer(
    request: Customers.AddGroupToCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<AddGroupToCustomerResponse, ResponseError> {
    return this.#rawClient.execute<AddGroupToCustomerResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/customers/{customer_id}/groups/{group_id}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "customer_id", value: request.customerId, schema: s.string() },
          { name: "group_id", value: request.groupId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: addGroupToCustomerResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  bulkCreateCustomers(
    request: Customers.BulkCreateCustomersRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkCreateCustomersResponse, ResponseError> {
    return this.#rawClient.execute<BulkCreateCustomersResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/customers/bulk-create"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: bulkCreateCustomersRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkCreateCustomersResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  bulkDeleteCustomers(
    request: Customers.BulkDeleteCustomersRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkDeleteCustomersResponse, ResponseError> {
    return this.#rawClient.execute<BulkDeleteCustomersResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/customers/bulk-delete"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: bulkDeleteCustomersRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkDeleteCustomersResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  bulkRetrieveCustomers(
    request: Customers.BulkRetrieveCustomersRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkRetrieveCustomersResponse, ResponseError> {
    return this.#rawClient.execute<BulkRetrieveCustomersResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/customers/bulk-retrieve"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: bulkRetrieveCustomersRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkRetrieveCustomersResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  bulkUpdateCustomers(
    request: Customers.BulkUpdateCustomersRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkUpdateCustomersResponse, ResponseError> {
    return this.#rawClient.execute<BulkUpdateCustomersResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/customers/bulk-update"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: bulkUpdateCustomersRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkUpdateCustomersResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createCustomer(
    request: Customers.CreateCustomerRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateCustomerResponse, ResponseError> {
    return this.#rawClient.execute<CreateCustomerResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/customers"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createCustomerRequestSchema },
      },
      {
        success: { kind: "json", schema: createCustomerResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createCustomerCard(
    request: Customers.CreateCustomerCardRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateCustomerCardResponse, ResponseError> {
    return this.#rawClient.execute<CreateCustomerCardResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/customers/{customer_id}/cards"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "customer_id", value: request.customerId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createCustomerCardRequestSchema },
      },
      {
        success: { kind: "json", schema: createCustomerCardResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteCustomer(
    request: Customers.DeleteCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteCustomerResponse, ResponseError> {
    return this.#rawClient.execute<DeleteCustomerResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/customers/{customer_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "customer_id", value: request.customerId, schema: s.string() }],
        query: [{ name: "version", value: request.version, schema: s.optional(s.number()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteCustomerResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteCustomerCard(
    request: Customers.DeleteCustomerCardRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteCustomerCardResponse, ResponseError> {
    return this.#rawClient.execute<DeleteCustomerCardResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/customers/{customer_id}/cards/{card_id}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "customer_id", value: request.customerId, schema: s.string() },
          { name: "card_id", value: request.cardId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteCustomerCardResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listCustomers(
    request: Customers.ListCustomersRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCustomersResponse, ResponseError> {
    return this.#rawClient.execute<ListCustomersResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/customers"),
        auth: this.#auth.oauth2,
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          {
            name: "sort_field",
            value: request.sortField,
            schema: s.optional(s.lazy(() => customerSortFieldSchema)),
          },
          { name: "sort_order", value: request.sortOrder, schema: s.optional(s.lazy(() => sortOrderSchema)) },
          { name: "count", value: request.count, schema: s.defaulted(s.boolean(), false) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCustomersResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  removeGroupFromCustomer(
    request: Customers.RemoveGroupFromCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<RemoveGroupFromCustomerResponse, ResponseError> {
    return this.#rawClient.execute<RemoveGroupFromCustomerResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/customers/{customer_id}/groups/{group_id}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "customer_id", value: request.customerId, schema: s.string() },
          { name: "group_id", value: request.groupId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: removeGroupFromCustomerResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveCustomer(
    request: Customers.RetrieveCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveCustomerResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveCustomerResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/customers/{customer_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "customer_id", value: request.customerId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveCustomerResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  searchCustomers(
    request: Customers.SearchCustomersRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchCustomersResponse, ResponseError> {
    return this.#rawClient.execute<SearchCustomersResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/customers/search"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: searchCustomersRequestSchema },
      },
      {
        success: { kind: "json", schema: searchCustomersResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateCustomer(
    request: Customers.UpdateCustomerRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateCustomerResponse, ResponseError> {
    return this.#rawClient.execute<UpdateCustomerResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/customers/{customer_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "customer_id", value: request.customerId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateCustomerRequestSchema },
      },
      {
        success: { kind: "json", schema: updateCustomerResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Customers {
  export type AddGroupToCustomerRequest = {
    customerId: string;
    groupId: string;
  };

  export type BulkCreateCustomersRequestParams = {
    body: BulkCreateCustomersRequest;
  };

  export type BulkDeleteCustomersRequestParams = {
    body: BulkDeleteCustomersRequest;
  };

  export type BulkRetrieveCustomersRequestParams = {
    body: BulkRetrieveCustomersRequest;
  };

  export type BulkUpdateCustomersRequestParams = {
    body: BulkUpdateCustomersRequest;
  };

  export type CreateCustomerRequestParams = {
    body: CreateCustomerRequest;
  };

  export type CreateCustomerCardRequestParams = {
    customerId: string;
    body: CreateCustomerCardRequest;
  };

  export type DeleteCustomerRequest = {
    customerId: string;
    version?: number;
  };

  export type DeleteCustomerCardRequest = {
    customerId: string;
    cardId: string;
  };

  export type ListCustomersRequest = {
    cursor?: string;
    limit?: number;
    sortField?: CustomerSortField;
    sortOrder?: SortOrder;
    count?: boolean;
  };

  export type RemoveGroupFromCustomerRequest = {
    customerId: string;
    groupId: string;
  };

  export type RetrieveCustomerRequest = {
    customerId: string;
  };

  export type SearchCustomersRequestParams = {
    body: SearchCustomersRequest;
  };

  export type UpdateCustomerRequestParams = {
    customerId: string;
    body: UpdateCustomerRequest;
  };
}
