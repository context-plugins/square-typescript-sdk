import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  bulkDeleteMerchantCustomAttributesRequestSchema,
  type BulkDeleteMerchantCustomAttributesRequest,
} from "../models/bulk-delete-merchant-custom-attributes-request.js";
import {
  bulkDeleteMerchantCustomAttributesResponseSchema,
  type BulkDeleteMerchantCustomAttributesResponse,
} from "../models/bulk-delete-merchant-custom-attributes-response.js";
import {
  bulkUpsertMerchantCustomAttributesRequestSchema,
  type BulkUpsertMerchantCustomAttributesRequest,
} from "../models/bulk-upsert-merchant-custom-attributes-request.js";
import {
  bulkUpsertMerchantCustomAttributesResponseSchema,
  type BulkUpsertMerchantCustomAttributesResponse,
} from "../models/bulk-upsert-merchant-custom-attributes-response.js";
import {
  createMerchantCustomAttributeDefinitionRequestSchema,
  type CreateMerchantCustomAttributeDefinitionRequest,
} from "../models/create-merchant-custom-attribute-definition-request.js";
import {
  createMerchantCustomAttributeDefinitionResponseSchema,
  type CreateMerchantCustomAttributeDefinitionResponse,
} from "../models/create-merchant-custom-attribute-definition-response.js";
import {
  deleteMerchantCustomAttributeDefinitionResponseSchema,
  type DeleteMerchantCustomAttributeDefinitionResponse,
} from "../models/delete-merchant-custom-attribute-definition-response.js";
import {
  deleteMerchantCustomAttributeResponseSchema,
  type DeleteMerchantCustomAttributeResponse,
} from "../models/delete-merchant-custom-attribute-response.js";
import {
  listMerchantCustomAttributeDefinitionsResponseSchema,
  type ListMerchantCustomAttributeDefinitionsResponse,
} from "../models/list-merchant-custom-attribute-definitions-response.js";
import {
  listMerchantCustomAttributesResponseSchema,
  type ListMerchantCustomAttributesResponse,
} from "../models/list-merchant-custom-attributes-response.js";
import {
  retrieveMerchantCustomAttributeDefinitionResponseSchema,
  type RetrieveMerchantCustomAttributeDefinitionResponse,
} from "../models/retrieve-merchant-custom-attribute-definition-response.js";
import {
  retrieveMerchantCustomAttributeResponseSchema,
  type RetrieveMerchantCustomAttributeResponse,
} from "../models/retrieve-merchant-custom-attribute-response.js";
import {
  updateMerchantCustomAttributeDefinitionRequestSchema,
  type UpdateMerchantCustomAttributeDefinitionRequest,
} from "../models/update-merchant-custom-attribute-definition-request.js";
import {
  updateMerchantCustomAttributeDefinitionResponseSchema,
  type UpdateMerchantCustomAttributeDefinitionResponse,
} from "../models/update-merchant-custom-attribute-definition-response.js";
import {
  upsertMerchantCustomAttributeRequestSchema,
  type UpsertMerchantCustomAttributeRequest,
} from "../models/upsert-merchant-custom-attribute-request.js";
import {
  upsertMerchantCustomAttributeResponseSchema,
  type UpsertMerchantCustomAttributeResponse,
} from "../models/upsert-merchant-custom-attribute-response.js";
import { visibilityFilterSchema, type VisibilityFilter } from "../models/visibility-filter.js";
import type { Servers } from "../servers.js";

export class MerchantCustomAttributes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * BulkDeleteMerchantCustomAttributes
   *
   * @remarks
   * Deletes [custom attributes](entity:CustomAttribute) for a merchant as a bulk operation. To
   * delete a custom attribute owned by another application, the `visibility` setting must be
   * `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  bulkDeleteMerchantCustomAttributes(
    request: MerchantCustomAttributes.BulkDeleteMerchantCustomAttributesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkDeleteMerchantCustomAttributesResponse, ResponseError> {
    return this.#rawClient.execute<BulkDeleteMerchantCustomAttributesResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/merchants/custom-attributes/bulk-delete"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: bulkDeleteMerchantCustomAttributesRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkDeleteMerchantCustomAttributesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * BulkUpsertMerchantCustomAttributes
   *
   * @remarks
   * Creates or updates [custom attributes](entity:CustomAttribute) for a merchant as a bulk
   * operation. Use this endpoint to set the value of one or more custom attributes for a merchant.
   * A custom attribute is based on a custom attribute definition in a Square seller account, which
   * is created using the
   * [CreateMerchantCustomAttributeDefinition](api-endpoint:MerchantCustomAttributes-CreateMerchantCustomAttributeDefinition)
   * endpoint. This `BulkUpsertMerchantCustomAttributes` endpoint accepts a map of 1 to 25
   * individual upsert requests and returns a map of individual upsert responses. Each upsert
   * request has a unique ID and provides a merchant ID and custom attribute. Each upsert response
   * is returned with the ID of the corresponding request. To create or update a custom attribute
   * owned by another application, the `visibility` setting must be `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  bulkUpsertMerchantCustomAttributes(
    request: MerchantCustomAttributes.BulkUpsertMerchantCustomAttributesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkUpsertMerchantCustomAttributesResponse, ResponseError> {
    return this.#rawClient.execute<BulkUpsertMerchantCustomAttributesResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/merchants/custom-attributes/bulk-upsert"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: bulkUpsertMerchantCustomAttributesRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkUpsertMerchantCustomAttributesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * CreateMerchantCustomAttributeDefinition
   *
   * @remarks
   * Creates a merchant-related [custom attribute definition](entity:CustomAttributeDefinition) for
   * a Square seller account. Use this endpoint to define a custom attribute that can be associated
   * with a merchant connecting to your application. A custom attribute definition specifies the
   * `key`, `visibility`, `schema`, and other properties for a custom attribute. After the
   * definition is created, you can call
   * [UpsertMerchantCustomAttribute](api-endpoint:MerchantCustomAttributes-UpsertMerchantCustomAttribute)
   * or
   * [BulkUpsertMerchantCustomAttributes](api-endpoint:MerchantCustomAttributes-BulkUpsertMerchantCustomAttributes)
   * to set the custom attribute for a merchant.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  createMerchantCustomAttributeDefinition(
    request: MerchantCustomAttributes.CreateMerchantCustomAttributeDefinitionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateMerchantCustomAttributeDefinitionResponse, ResponseError> {
    return this.#rawClient.execute<CreateMerchantCustomAttributeDefinitionResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/merchants/custom-attribute-definitions"),
        auth: this.#auth.oauth2,
        body: {
          kind: "json",
          value: request.body,
          schema: createMerchantCustomAttributeDefinitionRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: createMerchantCustomAttributeDefinitionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * DeleteMerchantCustomAttribute
   *
   * @remarks
   * Deletes a [custom attribute](entity:CustomAttribute) associated with a merchant. To delete a
   * custom attribute owned by another application, the `visibility` setting must be
   * `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  deleteMerchantCustomAttribute(
    request: MerchantCustomAttributes.DeleteMerchantCustomAttributeRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteMerchantCustomAttributeResponse, ResponseError> {
    return this.#rawClient.execute<DeleteMerchantCustomAttributeResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/merchants/{merchant_id}/custom-attributes/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "merchant_id", value: request.merchantId, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteMerchantCustomAttributeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * DeleteMerchantCustomAttributeDefinition
   *
   * @remarks
   * Deletes a merchant-related [custom attribute definition](entity:CustomAttributeDefinition) from
   * a Square seller account. Deleting a custom attribute definition also deletes the corresponding
   * custom attribute from the merchant. Only the definition owner can delete a custom attribute
   * definition.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  deleteMerchantCustomAttributeDefinition(
    request: MerchantCustomAttributes.DeleteMerchantCustomAttributeDefinitionRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteMerchantCustomAttributeDefinitionResponse, ResponseError> {
    return this.#rawClient.execute<DeleteMerchantCustomAttributeDefinitionResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/merchants/custom-attribute-definitions/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteMerchantCustomAttributeDefinitionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * ListMerchantCustomAttributeDefinitions
   *
   * @remarks
   * Lists the merchant-related [custom attribute definitions](entity:CustomAttributeDefinition)
   * that belong to a Square seller account. When all response pages are retrieved, the results
   * include all custom attribute definitions that are visible to the requesting application,
   * including those that are created by other applications and set to `VISIBILITY_READ_ONLY` or
   * `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  listMerchantCustomAttributeDefinitions(
    request: MerchantCustomAttributes.ListMerchantCustomAttributeDefinitionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListMerchantCustomAttributeDefinitionsResponse, ResponseError> {
    return this.#rawClient.execute<ListMerchantCustomAttributeDefinitionsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/merchants/custom-attribute-definitions"),
        auth: this.#auth.oauth2,
        query: [
          {
            name: "visibility_filter",
            value: request.visibilityFilter,
            schema: s.optional(s.lazy(() => visibilityFilterSchema)),
          },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMerchantCustomAttributeDefinitionsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * ListMerchantCustomAttributes
   *
   * @remarks
   * Lists the [custom attributes](entity:CustomAttribute) associated with a merchant. You can use
   * the `with_definitions` query parameter to also retrieve custom attribute definitions in the
   * same call. When all response pages are retrieved, the results include all custom attributes
   * that are visible to the requesting application, including those that are owned by other
   * applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  listMerchantCustomAttributes(
    request: MerchantCustomAttributes.ListMerchantCustomAttributesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListMerchantCustomAttributesResponse, ResponseError> {
    return this.#rawClient.execute<ListMerchantCustomAttributesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/merchants/{merchant_id}/custom-attributes"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "merchant_id", value: request.merchantId, schema: s.string() }],
        query: [
          {
            name: "visibility_filter",
            value: request.visibilityFilter,
            schema: s.optional(s.lazy(() => visibilityFilterSchema)),
          },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          {
            name: "with_definitions",
            value: request.withDefinitions,
            schema: s.defaulted(s.boolean(), false),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMerchantCustomAttributesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * RetrieveMerchantCustomAttribute
   *
   * @remarks
   * Retrieves a [custom attribute](entity:CustomAttribute) associated with a merchant. You can use
   * the `with_definition` query parameter to also retrieve the custom attribute definition in the
   * same call. To retrieve a custom attribute owned by another application, the `visibility`
   * setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  retrieveMerchantCustomAttribute(
    request: MerchantCustomAttributes.RetrieveMerchantCustomAttributeRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveMerchantCustomAttributeResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveMerchantCustomAttributeResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/merchants/{merchant_id}/custom-attributes/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "merchant_id", value: request.merchantId, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
        ],
        query: [
          { name: "with_definition", value: request.withDefinition, schema: s.defaulted(s.boolean(), false) },
          { name: "version", value: request.version, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveMerchantCustomAttributeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * RetrieveMerchantCustomAttributeDefinition
   *
   * @remarks
   * Retrieves a merchant-related [custom attribute definition](entity:CustomAttributeDefinition)
   * from a Square seller account. To retrieve a custom attribute definition created by another
   * application, the `visibility` setting must be `VISIBILITY_READ_ONLY` or
   * `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  retrieveMerchantCustomAttributeDefinition(
    request: MerchantCustomAttributes.RetrieveMerchantCustomAttributeDefinitionRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveMerchantCustomAttributeDefinitionResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveMerchantCustomAttributeDefinitionResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/merchants/custom-attribute-definitions/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [{ name: "version", value: request.version, schema: s.optional(s.number()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveMerchantCustomAttributeDefinitionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * UpdateMerchantCustomAttributeDefinition
   *
   * @remarks
   * Updates a merchant-related [custom attribute definition](entity:CustomAttributeDefinition) for
   * a Square seller account. Use this endpoint to update the following fields: `name`,
   * `description`, `visibility`, or the `schema` for a `Selection` data type. Only the definition
   * owner can update a custom attribute definition.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  updateMerchantCustomAttributeDefinition(
    request: MerchantCustomAttributes.UpdateMerchantCustomAttributeDefinitionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateMerchantCustomAttributeDefinitionResponse, ResponseError> {
    return this.#rawClient.execute<UpdateMerchantCustomAttributeDefinitionResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/merchants/custom-attribute-definitions/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: updateMerchantCustomAttributeDefinitionRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: updateMerchantCustomAttributeDefinitionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * UpsertMerchantCustomAttribute
   *
   * @remarks
   * Creates or updates a [custom attribute](entity:CustomAttribute) for a merchant. Use this
   * endpoint to set the value of a custom attribute for a specified merchant. A custom attribute is
   * based on a custom attribute definition in a Square seller account, which is created using the
   * [CreateMerchantCustomAttributeDefinition](api-endpoint:MerchantCustomAttributes-CreateMerchantCustomAttributeDefinition)
   * endpoint. To create or update a custom attribute owned by another application, the `visibility`
   * setting must be `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  upsertMerchantCustomAttribute(
    request: MerchantCustomAttributes.UpsertMerchantCustomAttributeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpsertMerchantCustomAttributeResponse, ResponseError> {
    return this.#rawClient.execute<UpsertMerchantCustomAttributeResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/merchants/{merchant_id}/custom-attributes/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "merchant_id", value: request.merchantId, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: upsertMerchantCustomAttributeRequestSchema },
      },
      {
        success: { kind: "json", schema: upsertMerchantCustomAttributeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace MerchantCustomAttributes {
  export type BulkDeleteMerchantCustomAttributesRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BulkDeleteMerchantCustomAttributesRequest;
  };

  export type BulkUpsertMerchantCustomAttributesRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BulkUpsertMerchantCustomAttributesRequest;
  };

  export type CreateMerchantCustomAttributeDefinitionRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateMerchantCustomAttributeDefinitionRequest;
  };

  export type DeleteMerchantCustomAttributeRequest = {
    /** The ID of the target [merchant](entity:Merchant). */
    merchantId: string;
    /**
     * The key of the custom attribute to delete. This key must match the `key` of a custom
     * attribute definition in the Square seller account. If the requesting application is not the
     * definition owner, you must use the qualified key.
     */
    key: string;
  };

  export type DeleteMerchantCustomAttributeDefinitionRequest = {
    /** The key of the custom attribute definition to delete. */
    key: string;
  };

  export type ListMerchantCustomAttributeDefinitionsRequest = {
    /** Filters the `CustomAttributeDefinition` results by their `visibility` values. */
    visibilityFilter?: VisibilityFilter;
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

  export type ListMerchantCustomAttributesRequest = {
    /** The ID of the target [merchant](entity:Merchant). */
    merchantId: string;
    /** Filters the `CustomAttributeDefinition` results by their `visibility` values. */
    visibilityFilter?: VisibilityFilter;
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

  export type RetrieveMerchantCustomAttributeRequest = {
    /** The ID of the target [merchant](entity:Merchant). */
    merchantId: string;
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

  export type RetrieveMerchantCustomAttributeDefinitionRequest = {
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

  export type UpdateMerchantCustomAttributeDefinitionRequestParams = {
    /** The key of the custom attribute definition to update. */
    key: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateMerchantCustomAttributeDefinitionRequest;
  };

  export type UpsertMerchantCustomAttributeRequestParams = {
    /** The ID of the target [merchant](entity:Merchant). */
    merchantId: string;
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
    body: UpsertMerchantCustomAttributeRequest;
  };
}
