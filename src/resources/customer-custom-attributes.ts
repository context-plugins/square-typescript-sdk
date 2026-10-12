import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  bulkUpsertCustomerCustomAttributesRequestSchema,
  type BulkUpsertCustomerCustomAttributesRequest,
} from "../models/bulk-upsert-customer-custom-attributes-request.js";
import {
  bulkUpsertCustomerCustomAttributesResponseSchema,
  type BulkUpsertCustomerCustomAttributesResponse,
} from "../models/bulk-upsert-customer-custom-attributes-response.js";
import {
  createCustomerCustomAttributeDefinitionRequestSchema,
  type CreateCustomerCustomAttributeDefinitionRequest,
} from "../models/create-customer-custom-attribute-definition-request.js";
import {
  createCustomerCustomAttributeDefinitionResponseSchema,
  type CreateCustomerCustomAttributeDefinitionResponse,
} from "../models/create-customer-custom-attribute-definition-response.js";
import {
  deleteCustomerCustomAttributeDefinitionResponseSchema,
  type DeleteCustomerCustomAttributeDefinitionResponse,
} from "../models/delete-customer-custom-attribute-definition-response.js";
import {
  deleteCustomerCustomAttributeResponseSchema,
  type DeleteCustomerCustomAttributeResponse,
} from "../models/delete-customer-custom-attribute-response.js";
import {
  listCustomerCustomAttributeDefinitionsResponseSchema,
  type ListCustomerCustomAttributeDefinitionsResponse,
} from "../models/list-customer-custom-attribute-definitions-response.js";
import {
  listCustomerCustomAttributesResponseSchema,
  type ListCustomerCustomAttributesResponse,
} from "../models/list-customer-custom-attributes-response.js";
import {
  retrieveCustomerCustomAttributeDefinitionResponseSchema,
  type RetrieveCustomerCustomAttributeDefinitionResponse,
} from "../models/retrieve-customer-custom-attribute-definition-response.js";
import {
  retrieveCustomerCustomAttributeResponseSchema,
  type RetrieveCustomerCustomAttributeResponse,
} from "../models/retrieve-customer-custom-attribute-response.js";
import {
  updateCustomerCustomAttributeDefinitionRequestSchema,
  type UpdateCustomerCustomAttributeDefinitionRequest,
} from "../models/update-customer-custom-attribute-definition-request.js";
import {
  updateCustomerCustomAttributeDefinitionResponseSchema,
  type UpdateCustomerCustomAttributeDefinitionResponse,
} from "../models/update-customer-custom-attribute-definition-response.js";
import {
  upsertCustomerCustomAttributeRequestSchema,
  type UpsertCustomerCustomAttributeRequest,
} from "../models/upsert-customer-custom-attribute-request.js";
import {
  upsertCustomerCustomAttributeResponseSchema,
  type UpsertCustomerCustomAttributeResponse,
} from "../models/upsert-customer-custom-attribute-response.js";
import type { Servers } from "../servers.js";

export class CustomerCustomAttributes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * BulkUpsertCustomerCustomAttributes
   *
   * @remarks
   * Creates or updates [custom attributes](entity:CustomAttribute) for customer profiles as a bulk
   * operation.
   *
   * Use this endpoint to set the value of one or more custom attributes for one or more customer
   * profiles. A custom attribute is based on a custom attribute definition in a Square seller
   * account, which is created using the
   * [CreateCustomerCustomAttributeDefinition](api-endpoint:CustomerCustomAttributes-CreateCustomerCustomAttributeDefinition)
   * endpoint.
   *
   * This `BulkUpsertCustomerCustomAttributes` endpoint accepts a map of 1 to 25 individual upsert
   * requests and returns a map of individual upsert responses. Each upsert request has a unique ID
   * and provides a customer ID and custom attribute. Each upsert response is returned with the ID
   * of the corresponding request.
   *
   * To create or update a custom attribute owned by another application, the `visibility` setting
   * must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes (also known
   * as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkUpsertCustomerCustomAttributes(
    request: CustomerCustomAttributes.BulkUpsertCustomerCustomAttributesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkUpsertCustomerCustomAttributesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/customers/custom-attributes/bulk-upsert"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkUpsertCustomerCustomAttributesRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkUpsertCustomerCustomAttributesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * CreateCustomerCustomAttributeDefinition
   *
   * @remarks
   * Creates a customer-related [custom attribute definition](entity:CustomAttributeDefinition) for
   * a Square seller account. Use this endpoint to define a custom attribute that can be associated
   * with customer profiles.
   *
   * A custom attribute definition specifies the `key`, `visibility`, `schema`, and other properties
   * for a custom attribute. After the definition is created, you can call
   * [UpsertCustomerCustomAttribute](api-endpoint:CustomerCustomAttributes-UpsertCustomerCustomAttribute)
   * or
   * [BulkUpsertCustomerCustomAttributes](api-endpoint:CustomerCustomAttributes-BulkUpsertCustomerCustomAttributes)
   * to set the custom attribute for customer profiles in the seller's Customer Directory.
   *
   * Sellers can view all custom attributes in exported customer data, including those set to
   * `VISIBILITY_HIDDEN`.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomerCustomAttributeDefinition(
    request: CustomerCustomAttributes.CreateCustomerCustomAttributeDefinitionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateCustomerCustomAttributeDefinitionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/customers/custom-attribute-definitions"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: createCustomerCustomAttributeDefinitionRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: createCustomerCustomAttributeDefinitionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * DeleteCustomerCustomAttribute
   *
   * @remarks
   * Deletes a [custom attribute](entity:CustomAttribute) associated with a customer profile.
   *
   * To delete a custom attribute owned by another application, the `visibility` setting must be
   * `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes (also known as
   * custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCustomerCustomAttribute(
    request: CustomerCustomAttributes.DeleteCustomerCustomAttributeRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteCustomerCustomAttributeResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/customers/{customer_id}/custom-attributes/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "customer_id", value: request.customerId, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteCustomerCustomAttributeResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * DeleteCustomerCustomAttributeDefinition
   *
   * @remarks
   * Deletes a customer-related [custom attribute definition](entity:CustomAttributeDefinition) from
   * a Square seller account.
   *
   * Deleting a custom attribute definition also deletes the corresponding custom attribute from all
   * customer profiles in the seller's Customer Directory.
   *
   * Only the definition owner can delete a custom attribute definition.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCustomerCustomAttributeDefinition(
    request: CustomerCustomAttributes.DeleteCustomerCustomAttributeDefinitionRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteCustomerCustomAttributeDefinitionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/customers/custom-attribute-definitions/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteCustomerCustomAttributeDefinitionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * ListCustomerCustomAttributeDefinitions
   *
   * @remarks
   * Lists the customer-related [custom attribute definitions](entity:CustomAttributeDefinition)
   * that belong to a Square seller account.
   *
   * When all response pages are retrieved, the results include all custom attribute definitions
   * that are visible to the requesting application, including those that are created by other
   * applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that
   * seller-defined custom attributes (also known as custom fields) are always set to
   * `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomerCustomAttributeDefinitions(
    request: CustomerCustomAttributes.ListCustomerCustomAttributeDefinitionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCustomerCustomAttributeDefinitionsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/customers/custom-attribute-definitions"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCustomerCustomAttributeDefinitionsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * ListCustomerCustomAttributes
   *
   * @remarks
   * Lists the [custom attributes](entity:CustomAttribute) associated with a customer profile.
   *
   * You can use the `with_definitions` query parameter to also retrieve custom attribute
   * definitions in the same call.
   *
   * When all response pages are retrieved, the results include all custom attributes that are
   * visible to the requesting application, including those that are owned by other applications and
   * set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomerCustomAttributes(
    request: CustomerCustomAttributes.ListCustomerCustomAttributesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCustomerCustomAttributesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/customers/{customer_id}/custom-attributes"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "customer_id", value: request.customerId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          {
            name: "with_definitions",
            value: request.withDefinitions,
            schema: s.defaulted(s.boolean(), false),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCustomerCustomAttributesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveCustomerCustomAttribute
   *
   * @remarks
   * Retrieves a [custom attribute](entity:CustomAttribute) associated with a customer profile.
   *
   * You can use the `with_definition` query parameter to also retrieve the custom attribute
   * definition in the same call.
   *
   * To retrieve a custom attribute owned by another application, the `visibility` setting must be
   * `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom
   * attributes (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveCustomerCustomAttribute(
    request: CustomerCustomAttributes.RetrieveCustomerCustomAttributeRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveCustomerCustomAttributeResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/customers/{customer_id}/custom-attributes/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "customer_id", value: request.customerId, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
        ],
        query: [
          { name: "with_definition", value: request.withDefinition, schema: s.defaulted(s.boolean(), false) },
          { name: "version", value: request.version, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveCustomerCustomAttributeResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveCustomerCustomAttributeDefinition
   *
   * @remarks
   * Retrieves a customer-related [custom attribute definition](entity:CustomAttributeDefinition)
   * from a Square seller account.
   *
   * To retrieve a custom attribute definition created by another application, the `visibility`
   * setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that
   * seller-defined custom attributes (also known as custom fields) are always set to
   * `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveCustomerCustomAttributeDefinition(
    request: CustomerCustomAttributes.RetrieveCustomerCustomAttributeDefinitionRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveCustomerCustomAttributeDefinitionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/customers/custom-attribute-definitions/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [{ name: "version", value: request.version, schema: s.optional(s.int()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveCustomerCustomAttributeDefinitionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * UpdateCustomerCustomAttributeDefinition
   *
   * @remarks
   * Updates a customer-related [custom attribute definition](entity:CustomAttributeDefinition) for
   * a Square seller account.
   *
   * Use this endpoint to update the following fields: `name`, `description`, `visibility`, or the
   * `schema` for a `Selection` data type.
   *
   * Only the definition owner can update a custom attribute definition. Note that sellers can view
   * all custom attributes in exported customer data, including those set to `VISIBILITY_HIDDEN`.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCustomerCustomAttributeDefinition(
    request: CustomerCustomAttributes.UpdateCustomerCustomAttributeDefinitionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateCustomerCustomAttributeDefinitionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v2/customers/custom-attribute-definitions/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: updateCustomerCustomAttributeDefinitionRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: updateCustomerCustomAttributeDefinitionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * UpsertCustomerCustomAttribute
   *
   * @remarks
   * Creates or updates a [custom attribute](entity:CustomAttribute) for a customer profile.
   *
   * Use this endpoint to set the value of a custom attribute for a specified customer profile. A
   * custom attribute is based on a custom attribute definition in a Square seller account, which is
   * created using the
   * [CreateCustomerCustomAttributeDefinition](api-endpoint:CustomerCustomAttributes-CreateCustomerCustomAttributeDefinition)
   * endpoint.
   *
   * To create or update a custom attribute owned by another application, the `visibility` setting
   * must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes (also known
   * as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  upsertCustomerCustomAttribute(
    request: CustomerCustomAttributes.UpsertCustomerCustomAttributeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpsertCustomerCustomAttributeResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/customers/{customer_id}/custom-attributes/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "customer_id", value: request.customerId, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: upsertCustomerCustomAttributeRequestSchema },
      },
      {
        success: { kind: "json", schema: upsertCustomerCustomAttributeResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace CustomerCustomAttributes {
  export type BulkUpsertCustomerCustomAttributesRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BulkUpsertCustomerCustomAttributesRequest;
  };

  export type CreateCustomerCustomAttributeDefinitionRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateCustomerCustomAttributeDefinitionRequest;
  };

  export type DeleteCustomerCustomAttributeRequest = {
    /** The ID of the target [customer profile](entity:Customer). */
    customerId: string;
    /**
     * The key of the custom attribute to delete. This key must match the `key` of a custom
     * attribute definition in the Square seller account. If the requesting application is not the
     * definition owner, you must use the qualified key.
     */
    key: string;
  };

  export type DeleteCustomerCustomAttributeDefinitionRequest = {
    /** The key of the custom attribute definition to delete. */
    key: string;
  };

  export type ListCustomerCustomAttributeDefinitionsRequest = {
    /**
     * The maximum number of results to return in a single paged response. This limit is advisory.
     * The response might contain more or fewer results. The minimum value is 1 and the maximum
     * value is 100. The default value is 20. For more information, see
     * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    limit?: number;
    /**
     * The cursor returned in the paged response from the previous call to this endpoint. Provide
     * this cursor to retrieve the next page of results for your original request. For more
     * information, see
     * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
  };

  export type ListCustomerCustomAttributesRequest = {
    /** The ID of the target [customer profile](entity:Customer). */
    customerId: string;
    /**
     * The maximum number of results to return in a single paged response. This limit is advisory.
     * The response might contain more or fewer results. The minimum value is 1 and the maximum
     * value is 100. The default value is 20. For more information, see
     * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    limit?: number;
    /**
     * The cursor returned in the paged response from the previous call to this endpoint. Provide
     * this cursor to retrieve the next page of results for your original request. For more
     * information, see
     * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
    /**
     * Indicates whether to return the [custom attribute
     * definition](entity:CustomAttributeDefinition) in the `definition` field of each custom
     * attribute. Set this parameter to `true` to get the name and description of each custom
     * attribute, information about the data type, or other definition details. The default value is
     * `false`.
     *
     * @default false
     */
    withDefinitions?: boolean;
  };

  export type RetrieveCustomerCustomAttributeRequest = {
    /** The ID of the target [customer profile](entity:Customer). */
    customerId: string;
    /**
     * The key of the custom attribute to retrieve. This key must match the `key` of a custom
     * attribute definition in the Square seller account. If the requesting application is not the
     * definition owner, you must use the qualified key.
     */
    key: string;
    /**
     * Indicates whether to return the [custom attribute
     * definition](entity:CustomAttributeDefinition) in the `definition` field of the custom
     * attribute. Set this parameter to `true` to get the name and description of the custom
     * attribute, information about the data type, or other definition details. The default value is
     * `false`.
     *
     * @default false
     */
    withDefinition?: boolean;
    /**
     * The current version of the custom attribute, which is used for strongly consistent reads to
     * guarantee that you receive the most up-to-date data. When included in the request, Square
     * returns the specified version or a higher version if one exists. If the specified version is
     * higher than the current version, Square returns a `BAD_REQUEST` error.
     */
    version?: number;
  };

  export type RetrieveCustomerCustomAttributeDefinitionRequest = {
    /**
     * The key of the custom attribute definition to retrieve. If the requesting application is not
     * the definition owner, you must use the qualified key.
     */
    key: string;
    /**
     * The current version of the custom attribute definition, which is used for strongly consistent
     * reads to guarantee that you receive the most up-to-date data. When included in the request,
     * Square returns the specified version or a higher version if one exists. If the specified
     * version is higher than the current version, Square returns a `BAD_REQUEST` error.
     */
    version?: number;
  };

  export type UpdateCustomerCustomAttributeDefinitionRequestParams = {
    /** The key of the custom attribute definition to update. */
    key: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateCustomerCustomAttributeDefinitionRequest;
  };

  export type UpsertCustomerCustomAttributeRequestParams = {
    /** The ID of the target [customer profile](entity:Customer). */
    customerId: string;
    /**
     * The key of the custom attribute to create or update. This key must match the `key` of a
     * custom attribute definition in the Square seller account. If the requesting application is
     * not the definition owner, you must use the qualified key.
     */
    key: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpsertCustomerCustomAttributeRequest;
  };
}
