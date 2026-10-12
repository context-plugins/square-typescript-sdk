import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  bulkDeleteOrderCustomAttributesRequestSchema,
  type BulkDeleteOrderCustomAttributesRequest,
} from "../models/bulk-delete-order-custom-attributes-request.js";
import {
  bulkDeleteOrderCustomAttributesResponseSchema,
  type BulkDeleteOrderCustomAttributesResponse,
} from "../models/bulk-delete-order-custom-attributes-response.js";
import {
  bulkUpsertOrderCustomAttributesRequestSchema,
  type BulkUpsertOrderCustomAttributesRequest,
} from "../models/bulk-upsert-order-custom-attributes-request.js";
import {
  bulkUpsertOrderCustomAttributesResponseSchema,
  type BulkUpsertOrderCustomAttributesResponse,
} from "../models/bulk-upsert-order-custom-attributes-response.js";
import {
  createOrderCustomAttributeDefinitionRequestSchema,
  type CreateOrderCustomAttributeDefinitionRequest,
} from "../models/create-order-custom-attribute-definition-request.js";
import {
  createOrderCustomAttributeDefinitionResponseSchema,
  type CreateOrderCustomAttributeDefinitionResponse,
} from "../models/create-order-custom-attribute-definition-response.js";
import {
  deleteOrderCustomAttributeDefinitionResponseSchema,
  type DeleteOrderCustomAttributeDefinitionResponse,
} from "../models/delete-order-custom-attribute-definition-response.js";
import {
  deleteOrderCustomAttributeResponseSchema,
  type DeleteOrderCustomAttributeResponse,
} from "../models/delete-order-custom-attribute-response.js";
import {
  listOrderCustomAttributeDefinitionsResponseSchema,
  type ListOrderCustomAttributeDefinitionsResponse,
} from "../models/list-order-custom-attribute-definitions-response.js";
import {
  listOrderCustomAttributesResponseSchema,
  type ListOrderCustomAttributesResponse,
} from "../models/list-order-custom-attributes-response.js";
import {
  retrieveOrderCustomAttributeDefinitionResponseSchema,
  type RetrieveOrderCustomAttributeDefinitionResponse,
} from "../models/retrieve-order-custom-attribute-definition-response.js";
import {
  retrieveOrderCustomAttributeResponseSchema,
  type RetrieveOrderCustomAttributeResponse,
} from "../models/retrieve-order-custom-attribute-response.js";
import {
  updateOrderCustomAttributeDefinitionRequestSchema,
  type UpdateOrderCustomAttributeDefinitionRequest,
} from "../models/update-order-custom-attribute-definition-request.js";
import {
  updateOrderCustomAttributeDefinitionResponseSchema,
  type UpdateOrderCustomAttributeDefinitionResponse,
} from "../models/update-order-custom-attribute-definition-response.js";
import {
  upsertOrderCustomAttributeRequestSchema,
  type UpsertOrderCustomAttributeRequest,
} from "../models/upsert-order-custom-attribute-request.js";
import {
  upsertOrderCustomAttributeResponseSchema,
  type UpsertOrderCustomAttributeResponse,
} from "../models/upsert-order-custom-attribute-response.js";
import { visibilityFilterSchema, type VisibilityFilter } from "../models/visibility-filter.js";
import type { Servers } from "../servers.js";

export class OrderCustomAttributes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * BulkDeleteOrderCustomAttributes
   *
   * @remarks
   * Deletes order [custom attributes](entity:CustomAttribute) as a bulk operation.
   *
   * Use this endpoint to delete one or more custom attributes from one or more orders. A custom
   * attribute is based on a custom attribute definition in a Square seller account. (To create a
   * custom attribute definition, use the
   * [CreateOrderCustomAttributeDefinition](api-endpoint:OrderCustomAttributes-CreateOrderCustomAttributeDefinition)
   * endpoint.)
   *
   * This `BulkDeleteOrderCustomAttributes` endpoint accepts a map of 1 to 25 individual delete
   * requests and returns a map of individual delete responses. Each delete request has a unique ID
   * and provides an order ID and custom attribute. Each delete response is returned with the ID of
   * the corresponding request.
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
  bulkDeleteOrderCustomAttributes(
    request: OrderCustomAttributes.BulkDeleteOrderCustomAttributesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkDeleteOrderCustomAttributesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/orders/custom-attributes/bulk-delete"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkDeleteOrderCustomAttributesRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkDeleteOrderCustomAttributesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * BulkUpsertOrderCustomAttributes
   *
   * @remarks
   * Creates or updates order [custom attributes](entity:CustomAttribute) as a bulk operation.
   *
   * Use this endpoint to delete one or more custom attributes from one or more orders. A custom
   * attribute is based on a custom attribute definition in a Square seller account. (To create a
   * custom attribute definition, use the
   * [CreateOrderCustomAttributeDefinition](api-endpoint:OrderCustomAttributes-CreateOrderCustomAttributeDefinition)
   * endpoint.)
   *
   * This `BulkUpsertOrderCustomAttributes` endpoint accepts a map of 1 to 25 individual upsert
   * requests and returns a map of individual upsert responses. Each upsert request has a unique ID
   * and provides an order ID and custom attribute. Each upsert response is returned with the ID of
   * the corresponding request.
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
  bulkUpsertOrderCustomAttributes(
    request: OrderCustomAttributes.BulkUpsertOrderCustomAttributesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkUpsertOrderCustomAttributesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/orders/custom-attributes/bulk-upsert"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkUpsertOrderCustomAttributesRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkUpsertOrderCustomAttributesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * CreateOrderCustomAttributeDefinition
   *
   * @remarks
   * Creates an order-related custom attribute definition. Use this endpoint to define a custom
   * attribute that can be associated with orders.
   *
   * After creating a custom attribute definition, you can set the custom attribute for orders in
   * the Square seller account.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createOrderCustomAttributeDefinition(
    request: OrderCustomAttributes.CreateOrderCustomAttributeDefinitionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateOrderCustomAttributeDefinitionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/orders/custom-attribute-definitions"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: createOrderCustomAttributeDefinitionRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: createOrderCustomAttributeDefinitionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * DeleteOrderCustomAttribute
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
  deleteOrderCustomAttribute(
    request: OrderCustomAttributes.DeleteOrderCustomAttributeRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteOrderCustomAttributeResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/orders/{order_id}/custom-attributes/{custom_attribute_key}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "order_id", value: request.orderId, schema: s.string() },
          { name: "custom_attribute_key", value: request.customAttributeKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteOrderCustomAttributeResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * DeleteOrderCustomAttributeDefinition
   *
   * @remarks
   * Deletes an order-related [custom attribute definition](entity:CustomAttributeDefinition) from a
   * Square seller account.
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
  deleteOrderCustomAttributeDefinition(
    request: OrderCustomAttributes.DeleteOrderCustomAttributeDefinitionRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteOrderCustomAttributeDefinitionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/orders/custom-attribute-definitions/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteOrderCustomAttributeDefinitionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * ListOrderCustomAttributeDefinitions
   *
   * @remarks
   * Lists the order-related [custom attribute definitions](entity:CustomAttributeDefinition) that
   * belong to a Square seller account.
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
  listOrderCustomAttributeDefinitions(
    request: OrderCustomAttributes.ListOrderCustomAttributeDefinitionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListOrderCustomAttributeDefinitionsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/orders/custom-attribute-definitions"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          {
            name: "visibility_filter",
            value: request.visibilityFilter,
            schema: s.optional(s.lazy(() => visibilityFilterSchema)),
          },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listOrderCustomAttributeDefinitionsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * ListOrderCustomAttributes
   *
   * @remarks
   * Lists the [custom attributes](entity:CustomAttribute) associated with an order.
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
  listOrderCustomAttributes(
    request: OrderCustomAttributes.ListOrderCustomAttributesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListOrderCustomAttributesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/orders/{order_id}/custom-attributes"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "order_id", value: request.orderId, schema: s.string() }],
        query: [
          {
            name: "visibility_filter",
            value: request.visibilityFilter,
            schema: s.optional(s.lazy(() => visibilityFilterSchema)),
          },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
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
        success: { kind: "json", schema: listOrderCustomAttributesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveOrderCustomAttribute
   *
   * @remarks
   * Retrieves a [custom attribute](entity:CustomAttribute) associated with an order.
   *
   * You can use the `with_definition` query parameter to also retrieve the custom attribute
   * definition in the same call.
   *
   * To retrieve a custom attribute owned by another application, the `visibility` setting must be
   * `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom
   * attributes also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveOrderCustomAttribute(
    request: OrderCustomAttributes.RetrieveOrderCustomAttributeRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveOrderCustomAttributeResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/orders/{order_id}/custom-attributes/{custom_attribute_key}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "order_id", value: request.orderId, schema: s.string() },
          { name: "custom_attribute_key", value: request.customAttributeKey, schema: s.string() },
        ],
        query: [
          { name: "version", value: request.version, schema: s.optional(s.int()) },
          { name: "with_definition", value: request.withDefinition, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveOrderCustomAttributeResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveOrderCustomAttributeDefinition
   *
   * @remarks
   * Retrieves an order-related [custom attribute definition](entity:CustomAttributeDefinition) from
   * a Square seller account.
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
  retrieveOrderCustomAttributeDefinition(
    request: OrderCustomAttributes.RetrieveOrderCustomAttributeDefinitionRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveOrderCustomAttributeDefinitionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/orders/custom-attribute-definitions/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [{ name: "version", value: request.version, schema: s.optional(s.int()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveOrderCustomAttributeDefinitionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * UpdateOrderCustomAttributeDefinition
   *
   * @remarks
   * Updates an order-related custom attribute definition for a Square seller account.
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
  updateOrderCustomAttributeDefinition(
    request: OrderCustomAttributes.UpdateOrderCustomAttributeDefinitionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateOrderCustomAttributeDefinitionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v2/orders/custom-attribute-definitions/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: updateOrderCustomAttributeDefinitionRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: updateOrderCustomAttributeDefinitionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * UpsertOrderCustomAttribute
   *
   * @remarks
   * Creates or updates a [custom attribute](entity:CustomAttribute) for an order.
   *
   * Use this endpoint to set the value of a custom attribute for a specific order. A custom
   * attribute is based on a custom attribute definition in a Square seller account. (To create a
   * custom attribute definition, use the
   * [CreateOrderCustomAttributeDefinition](api-endpoint:OrderCustomAttributes-CreateOrderCustomAttributeDefinition)
   * endpoint.)
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
  upsertOrderCustomAttribute(
    request: OrderCustomAttributes.UpsertOrderCustomAttributeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpsertOrderCustomAttributeResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/orders/{order_id}/custom-attributes/{custom_attribute_key}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "order_id", value: request.orderId, schema: s.string() },
          { name: "custom_attribute_key", value: request.customAttributeKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: upsertOrderCustomAttributeRequestSchema },
      },
      {
        success: { kind: "json", schema: upsertOrderCustomAttributeResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace OrderCustomAttributes {
  export type BulkDeleteOrderCustomAttributesRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BulkDeleteOrderCustomAttributesRequest;
  };

  export type BulkUpsertOrderCustomAttributesRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BulkUpsertOrderCustomAttributesRequest;
  };

  export type CreateOrderCustomAttributeDefinitionRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateOrderCustomAttributeDefinitionRequest;
  };

  export type DeleteOrderCustomAttributeRequest = {
    /** The ID of the target [order](entity:Order). */
    orderId: string;
    /**
     * The key of the custom attribute to delete. This key must match the key of an existing custom
     * attribute definition.
     */
    customAttributeKey: string;
  };

  export type DeleteOrderCustomAttributeDefinitionRequest = {
    /** The key of the custom attribute definition to delete. */
    key: string;
  };

  export type ListOrderCustomAttributeDefinitionsRequest = {
    /**
     * Requests that all of the custom attributes be returned, or only those that are read-only or
     * read-write.
     */
    visibilityFilter?: VisibilityFilter;
    /**
     * The cursor returned in the paged response from the previous call to this endpoint. Provide
     * this cursor to retrieve the next page of results for your original request. For more
     * information, see
     * [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    cursor?: string;
    /**
     * The maximum number of results to return in a single paged response. This limit is advisory.
     * The response might contain more or fewer results. The minimum value is 1 and the maximum
     * value is 100. The default value is 20. For more information, see
     * [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    limit?: number;
  };

  export type ListOrderCustomAttributesRequest = {
    /** The ID of the target [order](entity:Order). */
    orderId: string;
    /**
     * Requests that all of the custom attributes be returned, or only those that are read-only or
     * read-write.
     */
    visibilityFilter?: VisibilityFilter;
    /**
     * The cursor returned in the paged response from the previous call to this endpoint. Provide
     * this cursor to retrieve the next page of results for your original request. For more
     * information, see
     * [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    cursor?: string;
    /**
     * The maximum number of results to return in a single paged response. This limit is advisory.
     * The response might contain more or fewer results. The minimum value is 1 and the maximum
     * value is 100. The default value is 20. For more information, see
     * [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    limit?: number;
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

  export type RetrieveOrderCustomAttributeRequest = {
    /** The ID of the target [order](entity:Order). */
    orderId: string;
    /**
     * The key of the custom attribute to retrieve. This key must match the key of an existing
     * custom attribute definition.
     */
    customAttributeKey: string;
    /**
     * To enable [optimistic
     * concurrency](https://developer.squareup.com/docs/build-basics/common-api-patterns/optimistic-concurrency)
     * control, include this optional field and specify the current version of the custom attribute.
     */
    version?: number;
    /**
     * Indicates whether to return the [custom attribute
     * definition](entity:CustomAttributeDefinition) in the `definition` field of each custom
     * attribute. Set this parameter to `true` to get the name and description of each custom
     * attribute, information about the data type, or other definition details. The default value is
     * `false`.
     *
     * @default false
     */
    withDefinition?: boolean;
  };

  export type RetrieveOrderCustomAttributeDefinitionRequest = {
    /** The key of the custom attribute definition to retrieve. */
    key: string;
    /**
     * To enable [optimistic
     * concurrency](https://developer.squareup.com/docs/build-basics/common-api-patterns/optimistic-concurrency)
     * control, include this optional field and specify the current version of the custom attribute.
     */
    version?: number;
  };

  export type UpdateOrderCustomAttributeDefinitionRequestParams = {
    /** The key of the custom attribute definition to update. */
    key: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateOrderCustomAttributeDefinitionRequest;
  };

  export type UpsertOrderCustomAttributeRequestParams = {
    /** The ID of the target [order](entity:Order). */
    orderId: string;
    /**
     * The key of the custom attribute to create or update. This key must match the key of an
     * existing custom attribute definition.
     */
    customAttributeKey: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpsertOrderCustomAttributeRequest;
  };
}
