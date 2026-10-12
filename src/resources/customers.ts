import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * AddGroupToCustomer
   *
   * @remarks
   * Adds a group membership to a customer.
   *
   * The customer is identified by the `customer_id` value and the customer group is identified by
   * the `group_id` value.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addGroupToCustomer(
    request: Customers.AddGroupToCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<AddGroupToCustomerResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v2/customers/{customer_id}/groups/{group_id}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "customer_id", value: request.customerId, schema: s.string() },
          { name: "group_id", value: request.groupId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: addGroupToCustomerResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * BulkCreateCustomers
   *
   * @remarks
   * Creates multiple [customer profiles](entity:Customer) for a business.
   *
   * This endpoint takes a map of individual create requests and returns a map of responses.
   *
   * You must provide at least one of the following values in each create request:
   *
   * - `given_name`
   * - `family_name`
   * - `company_name`
   * - `email_address`
   * - `phone_number`
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkCreateCustomers(
    request: Customers.BulkCreateCustomersRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkCreateCustomersResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/customers/bulk-create"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkCreateCustomersRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkCreateCustomersResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * BulkDeleteCustomers
   *
   * @remarks
   * Deletes multiple customer profiles.
   *
   * The endpoint takes a list of customer IDs and returns a map of responses.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkDeleteCustomers(
    request: Customers.BulkDeleteCustomersRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkDeleteCustomersResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/customers/bulk-delete"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkDeleteCustomersRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkDeleteCustomersResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * BulkRetrieveCustomers
   *
   * @remarks
   * Retrieves multiple customer profiles.
   *
   * This endpoint takes a list of customer IDs and returns a map of responses.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkRetrieveCustomers(
    request: Customers.BulkRetrieveCustomersRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkRetrieveCustomersResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/customers/bulk-retrieve"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkRetrieveCustomersRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkRetrieveCustomersResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * BulkUpdateCustomers
   *
   * @remarks
   * Updates multiple customer profiles.
   *
   * This endpoint takes a map of individual update requests and returns a map of responses.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkUpdateCustomers(
    request: Customers.BulkUpdateCustomersRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkUpdateCustomersResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/customers/bulk-update"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkUpdateCustomersRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkUpdateCustomersResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * CreateCustomer
   *
   * @remarks
   * Creates a new customer for a business.
   *
   * You must provide at least one of the following values in your request to this endpoint:
   *
   * - `given_name`
   * - `family_name`
   * - `company_name`
   * - `email_address`
   * - `phone_number`
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomer(
    request: Customers.CreateCustomerRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateCustomerResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/customers"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createCustomerRequestSchema },
      },
      {
        success: { kind: "json", schema: createCustomerResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * CreateCustomerCard
   *
   * @remarks
   * Adds a card on file to an existing customer.
   *
   * As with charges, calls to `CreateCustomerCard` are idempotent. Multiple calls with the same
   * card nonce return the same card record that was created with the provided nonce during the
   * _first_ call.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  createCustomerCard(
    request: Customers.CreateCustomerCardRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateCustomerCardResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/customers/{customer_id}/cards"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "customer_id", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createCustomerCardRequestSchema },
      },
      {
        success: { kind: "json", schema: createCustomerCardResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * DeleteCustomer
   *
   * @remarks
   * Deletes a customer profile from a business.
   *
   * To delete a customer profile that was created by merging existing profiles, you must use the ID
   * of the newly created profile.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCustomer(
    request: Customers.DeleteCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteCustomerResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/customers/{customer_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "customer_id", value: request.customerId, schema: s.string() }],
        query: [{ name: "version", value: request.version, schema: s.optional(s.int()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteCustomerResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * DeleteCustomerCard
   *
   * @remarks
   * Removes a card on file from a customer.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  deleteCustomerCard(
    request: Customers.DeleteCustomerCardRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteCustomerCardResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/customers/{customer_id}/cards/{card_id}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "customer_id", value: request.customerId, schema: s.string() },
          { name: "card_id", value: request.cardId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteCustomerCardResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * ListCustomers
   *
   * @remarks
   * Lists customer profiles associated with a Square account.
   *
   * Under normal operating conditions, newly created or updated customer profiles become available
   * for the listing operation in well under 30 seconds. Occasionally, propagation of the new or
   * updated profiles can take closer to one minute or longer, especially during network incidents
   * and outages.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomers(
    request: Customers.ListCustomersRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCustomersResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/customers"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          {
            name: "sort_field",
            value: request.sortField,
            schema: s.optional(s.lazy(() => customerSortFieldSchema)),
          },
          { name: "sort_order", value: request.sortOrder, schema: s.optional(s.lazy(() => sortOrderSchema)) },
          { name: "count", value: request.count, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCustomersResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RemoveGroupFromCustomer
   *
   * @remarks
   * Removes a group membership from a customer.
   *
   * The customer is identified by the `customer_id` value and the customer group is identified by
   * the `group_id` value.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeGroupFromCustomer(
    request: Customers.RemoveGroupFromCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<RemoveGroupFromCustomerResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/customers/{customer_id}/groups/{group_id}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "customer_id", value: request.customerId, schema: s.string() },
          { name: "group_id", value: request.groupId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: removeGroupFromCustomerResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveCustomer
   *
   * @remarks
   * Returns details for a single customer.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveCustomer(
    request: Customers.RetrieveCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveCustomerResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/customers/{customer_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "customer_id", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveCustomerResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * SearchCustomers
   *
   * @remarks
   * Searches the customer profiles associated with a Square account using one or more supported
   * query filters.
   *
   * Calling `SearchCustomers` without any explicit query filter returns all customer profiles
   * ordered alphabetically based on `given_name` and `family_name`.
   *
   * Under normal operating conditions, newly created or updated customer profiles become available
   * for the search operation in well under 30 seconds. Occasionally, propagation of the new or
   * updated profiles can take closer to one minute or longer, especially during network incidents
   * and outages.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchCustomers(
    request: Customers.SearchCustomersRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchCustomersResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/customers/search"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchCustomersRequestSchema },
      },
      {
        success: { kind: "json", schema: searchCustomersResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * UpdateCustomer
   *
   * @remarks
   * Updates a customer profile. This endpoint supports sparse updates, so only new or changed
   * fields are required in the request. To add or update a field, specify the new value. To remove
   * a field, specify `null`.
   *
   * To update a customer profile that was created by merging existing profiles, you must use the ID
   * of the newly created profile.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCustomer(
    request: Customers.UpdateCustomerRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateCustomerResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v2/customers/{customer_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "customer_id", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateCustomerRequestSchema },
      },
      {
        success: { kind: "json", schema: updateCustomerResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Customers {
  export type AddGroupToCustomerRequest = {
    /** The ID of the customer to add to a group. */
    customerId: string;
    /** The ID of the customer group to add the customer to. */
    groupId: string;
  };

  export type BulkCreateCustomersRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BulkCreateCustomersRequest;
  };

  export type BulkDeleteCustomersRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BulkDeleteCustomersRequest;
  };

  export type BulkRetrieveCustomersRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BulkRetrieveCustomersRequest;
  };

  export type BulkUpdateCustomersRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BulkUpdateCustomersRequest;
  };

  export type CreateCustomerRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateCustomerRequest;
  };

  export type CreateCustomerCardRequestParams = {
    /** The Square ID of the customer profile the card is linked to. */
    customerId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateCustomerCardRequest;
  };

  export type DeleteCustomerRequest = {
    /** The ID of the customer to delete. */
    customerId: string;
    /**
     * The current version of the customer profile.
     *
     * As a best practice, you should include this parameter to enable [optimistic
     * concurrency](https://developer.squareup.com/docs/build-basics/common-api-patterns/optimistic-concurrency)
     * control. For more information, see [Delete a customer
     * profile](https://developer.squareup.com/docs/customers-api/use-the-api/keep-records#delete-customer-profile).
     */
    version?: number;
  };

  export type DeleteCustomerCardRequest = {
    /** The ID of the customer that the card on file belongs to. */
    customerId: string;
    /** The ID of the card on file to delete. */
    cardId: string;
  };

  export type ListCustomersRequest = {
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
     * response might contain more or fewer results. If the specified limit is less than 1 or
     * greater than 100, Square returns a `400 VALUE_TOO_LOW` or `400 VALUE_TOO_HIGH` error. The
     * default value is 100.
     *
     * For more information, see
     * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    limit?: number;
    /**
     * Indicates how customers should be sorted.
     *
     * The default value is `DEFAULT`.
     */
    sortField?: CustomerSortField;
    /**
     * Indicates whether customers should be sorted in ascending (`ASC`) or descending (`DESC`)
     * order.
     *
     * The default value is `ASC`.
     */
    sortOrder?: SortOrder;
    /**
     * Indicates whether to return the total count of customers in the `count` field of the
     * response.
     *
     * The default value is `false`.
     *
     * @default false
     */
    count?: boolean;
  };

  export type RemoveGroupFromCustomerRequest = {
    /** The ID of the customer to remove from the group. */
    customerId: string;
    /** The ID of the customer group to remove the customer from. */
    groupId: string;
  };

  export type RetrieveCustomerRequest = {
    /** The ID of the customer to retrieve. */
    customerId: string;
  };

  export type SearchCustomersRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: SearchCustomersRequest;
  };

  export type UpdateCustomerRequestParams = {
    /** The ID of the customer to update. */
    customerId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateCustomerRequest;
  };
}
