import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  bulkDeleteLocationCustomAttributesRequestSchema,
  type BulkDeleteLocationCustomAttributesRequest,
} from "../models/bulk-delete-location-custom-attributes-request.js";
import {
  bulkDeleteLocationCustomAttributesResponseSchema,
  type BulkDeleteLocationCustomAttributesResponse,
} from "../models/bulk-delete-location-custom-attributes-response.js";
import {
  bulkUpsertLocationCustomAttributesRequestSchema,
  type BulkUpsertLocationCustomAttributesRequest,
} from "../models/bulk-upsert-location-custom-attributes-request.js";
import {
  bulkUpsertLocationCustomAttributesResponseSchema,
  type BulkUpsertLocationCustomAttributesResponse,
} from "../models/bulk-upsert-location-custom-attributes-response.js";
import {
  createLocationCustomAttributeDefinitionRequestSchema,
  type CreateLocationCustomAttributeDefinitionRequest,
} from "../models/create-location-custom-attribute-definition-request.js";
import {
  createLocationCustomAttributeDefinitionResponseSchema,
  type CreateLocationCustomAttributeDefinitionResponse,
} from "../models/create-location-custom-attribute-definition-response.js";
import {
  deleteLocationCustomAttributeDefinitionResponseSchema,
  type DeleteLocationCustomAttributeDefinitionResponse,
} from "../models/delete-location-custom-attribute-definition-response.js";
import {
  deleteLocationCustomAttributeResponseSchema,
  type DeleteLocationCustomAttributeResponse,
} from "../models/delete-location-custom-attribute-response.js";
import {
  listLocationCustomAttributeDefinitionsResponseSchema,
  type ListLocationCustomAttributeDefinitionsResponse,
} from "../models/list-location-custom-attribute-definitions-response.js";
import {
  listLocationCustomAttributesResponseSchema,
  type ListLocationCustomAttributesResponse,
} from "../models/list-location-custom-attributes-response.js";
import {
  retrieveLocationCustomAttributeDefinitionResponseSchema,
  type RetrieveLocationCustomAttributeDefinitionResponse,
} from "../models/retrieve-location-custom-attribute-definition-response.js";
import {
  retrieveLocationCustomAttributeResponseSchema,
  type RetrieveLocationCustomAttributeResponse,
} from "../models/retrieve-location-custom-attribute-response.js";
import {
  updateLocationCustomAttributeDefinitionRequestSchema,
  type UpdateLocationCustomAttributeDefinitionRequest,
} from "../models/update-location-custom-attribute-definition-request.js";
import {
  updateLocationCustomAttributeDefinitionResponseSchema,
  type UpdateLocationCustomAttributeDefinitionResponse,
} from "../models/update-location-custom-attribute-definition-response.js";
import {
  upsertLocationCustomAttributeRequestSchema,
  type UpsertLocationCustomAttributeRequest,
} from "../models/upsert-location-custom-attribute-request.js";
import {
  upsertLocationCustomAttributeResponseSchema,
  type UpsertLocationCustomAttributeResponse,
} from "../models/upsert-location-custom-attribute-response.js";
import { visibilityFilterSchema, type VisibilityFilter } from "../models/visibility-filter.js";
import type { Servers } from "../servers.js";

export class LocationCustomAttributes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * BulkDeleteLocationCustomAttributes
   *
   * @remarks
   * Deletes [custom attributes](entity:CustomAttribute) for locations as a bulk operation. To
   * delete a custom attribute owned by another application, the `visibility` setting must be
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
  bulkDeleteLocationCustomAttributes(
    request: LocationCustomAttributes.BulkDeleteLocationCustomAttributesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkDeleteLocationCustomAttributesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/locations/custom-attributes/bulk-delete"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkDeleteLocationCustomAttributesRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkDeleteLocationCustomAttributesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * BulkUpsertLocationCustomAttributes
   *
   * @remarks
   * Creates or updates [custom attributes](entity:CustomAttribute) for locations as a bulk
   * operation. Use this endpoint to set the value of one or more custom attributes for one or more
   * locations. A custom attribute is based on a custom attribute definition in a Square seller
   * account, which is created using the
   * [CreateLocationCustomAttributeDefinition](api-endpoint:LocationCustomAttributes-CreateLocationCustomAttributeDefinition)
   * endpoint. This `BulkUpsertLocationCustomAttributes` endpoint accepts a map of 1 to 25
   * individual upsert requests and returns a map of individual upsert responses. Each upsert
   * request has a unique ID and provides a location ID and custom attribute. Each upsert response
   * is returned with the ID of the corresponding request. To create or update a custom attribute
   * owned by another application, the `visibility` setting must be `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkUpsertLocationCustomAttributes(
    request: LocationCustomAttributes.BulkUpsertLocationCustomAttributesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkUpsertLocationCustomAttributesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/locations/custom-attributes/bulk-upsert"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkUpsertLocationCustomAttributesRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkUpsertLocationCustomAttributesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * CreateLocationCustomAttributeDefinition
   *
   * @remarks
   * Creates a location-related [custom attribute definition](entity:CustomAttributeDefinition) for
   * a Square seller account. Use this endpoint to define a custom attribute that can be associated
   * with locations. A custom attribute definition specifies the `key`, `visibility`, `schema`, and
   * other properties for a custom attribute. After the definition is created, you can call
   * [UpsertLocationCustomAttribute](api-endpoint:LocationCustomAttributes-UpsertLocationCustomAttribute)
   * or
   * [BulkUpsertLocationCustomAttributes](api-endpoint:LocationCustomAttributes-BulkUpsertLocationCustomAttributes)
   * to set the custom attribute for locations.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLocationCustomAttributeDefinition(
    request: LocationCustomAttributes.CreateLocationCustomAttributeDefinitionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateLocationCustomAttributeDefinitionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/locations/custom-attribute-definitions"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: createLocationCustomAttributeDefinitionRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: createLocationCustomAttributeDefinitionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * DeleteLocationCustomAttribute
   *
   * @remarks
   * Deletes a [custom attribute](entity:CustomAttribute) associated with a location. To delete a
   * custom attribute owned by another application, the `visibility` setting must be
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
  deleteLocationCustomAttribute(
    request: LocationCustomAttributes.DeleteLocationCustomAttributeRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteLocationCustomAttributeResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/locations/{location_id}/custom-attributes/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "location_id", value: request.locationId, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteLocationCustomAttributeResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * DeleteLocationCustomAttributeDefinition
   *
   * @remarks
   * Deletes a location-related [custom attribute definition](entity:CustomAttributeDefinition) from
   * a Square seller account. Deleting a custom attribute definition also deletes the corresponding
   * custom attribute from all locations. Only the definition owner can delete a custom attribute
   * definition.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteLocationCustomAttributeDefinition(
    request: LocationCustomAttributes.DeleteLocationCustomAttributeDefinitionRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteLocationCustomAttributeDefinitionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/locations/custom-attribute-definitions/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteLocationCustomAttributeDefinitionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * ListLocationCustomAttributeDefinitions
   *
   * @remarks
   * Lists the location-related [custom attribute definitions](entity:CustomAttributeDefinition)
   * that belong to a Square seller account. When all response pages are retrieved, the results
   * include all custom attribute definitions that are visible to the requesting application,
   * including those that are created by other applications and set to `VISIBILITY_READ_ONLY` or
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
  listLocationCustomAttributeDefinitions(
    request: LocationCustomAttributes.ListLocationCustomAttributeDefinitionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListLocationCustomAttributeDefinitionsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/locations/custom-attribute-definitions"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          {
            name: "visibility_filter",
            value: request.visibilityFilter,
            schema: s.optional(s.lazy(() => visibilityFilterSchema)),
          },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listLocationCustomAttributeDefinitionsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * ListLocationCustomAttributes
   *
   * @remarks
   * Lists the [custom attributes](entity:CustomAttribute) associated with a location. You can use
   * the `with_definitions` query parameter to also retrieve custom attribute definitions in the
   * same call. When all response pages are retrieved, the results include all custom attributes
   * that are visible to the requesting application, including those that are owned by other
   * applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listLocationCustomAttributes(
    request: LocationCustomAttributes.ListLocationCustomAttributesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListLocationCustomAttributesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/locations/{location_id}/custom-attributes"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "location_id", value: request.locationId, schema: s.string() }],
        query: [
          {
            name: "visibility_filter",
            value: request.visibilityFilter,
            schema: s.optional(s.lazy(() => visibilityFilterSchema)),
          },
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
        success: { kind: "json", schema: listLocationCustomAttributesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveLocationCustomAttribute
   *
   * @remarks
   * Retrieves a [custom attribute](entity:CustomAttribute) associated with a location. You can use
   * the `with_definition` query parameter to also retrieve the custom attribute definition in the
   * same call. To retrieve a custom attribute owned by another application, the `visibility`
   * setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveLocationCustomAttribute(
    request: LocationCustomAttributes.RetrieveLocationCustomAttributeRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveLocationCustomAttributeResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/locations/{location_id}/custom-attributes/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "location_id", value: request.locationId, schema: s.string() },
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
        success: { kind: "json", schema: retrieveLocationCustomAttributeResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveLocationCustomAttributeDefinition
   *
   * @remarks
   * Retrieves a location-related [custom attribute definition](entity:CustomAttributeDefinition)
   * from a Square seller account. To retrieve a custom attribute definition created by another
   * application, the `visibility` setting must be `VISIBILITY_READ_ONLY` or
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
  retrieveLocationCustomAttributeDefinition(
    request: LocationCustomAttributes.RetrieveLocationCustomAttributeDefinitionRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveLocationCustomAttributeDefinitionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/locations/custom-attribute-definitions/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [{ name: "version", value: request.version, schema: s.optional(s.int()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveLocationCustomAttributeDefinitionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * UpdateLocationCustomAttributeDefinition
   *
   * @remarks
   * Updates a location-related [custom attribute definition](entity:CustomAttributeDefinition) for
   * a Square seller account. Use this endpoint to update the following fields: `name`,
   * `description`, `visibility`, or the `schema` for a `Selection` data type. Only the definition
   * owner can update a custom attribute definition.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateLocationCustomAttributeDefinition(
    request: LocationCustomAttributes.UpdateLocationCustomAttributeDefinitionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateLocationCustomAttributeDefinitionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v2/locations/custom-attribute-definitions/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: updateLocationCustomAttributeDefinitionRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: updateLocationCustomAttributeDefinitionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * UpsertLocationCustomAttribute
   *
   * @remarks
   * Creates or updates a [custom attribute](entity:CustomAttribute) for a location. Use this
   * endpoint to set the value of a custom attribute for a specified location. A custom attribute is
   * based on a custom attribute definition in a Square seller account, which is created using the
   * [CreateLocationCustomAttributeDefinition](api-endpoint:LocationCustomAttributes-CreateLocationCustomAttributeDefinition)
   * endpoint. To create or update a custom attribute owned by another application, the `visibility`
   * setting must be `VISIBILITY_READ_WRITE_VALUES`.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  upsertLocationCustomAttribute(
    request: LocationCustomAttributes.UpsertLocationCustomAttributeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpsertLocationCustomAttributeResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/locations/{location_id}/custom-attributes/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "location_id", value: request.locationId, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: upsertLocationCustomAttributeRequestSchema },
      },
      {
        success: { kind: "json", schema: upsertLocationCustomAttributeResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace LocationCustomAttributes {
  export type BulkDeleteLocationCustomAttributesRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BulkDeleteLocationCustomAttributesRequest;
  };

  export type BulkUpsertLocationCustomAttributesRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BulkUpsertLocationCustomAttributesRequest;
  };

  export type CreateLocationCustomAttributeDefinitionRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateLocationCustomAttributeDefinitionRequest;
  };

  export type DeleteLocationCustomAttributeRequest = {
    /** The ID of the target [location](entity:Location). */
    locationId: string;
    /**
     * The key of the custom attribute to delete. This key must match the `key` of a custom
     * attribute definition in the Square seller account. If the requesting application is not the
     * definition owner, you must use the qualified key.
     */
    key: string;
  };

  export type DeleteLocationCustomAttributeDefinitionRequest = {
    /** The key of the custom attribute definition to delete. */
    key: string;
  };

  export type ListLocationCustomAttributeDefinitionsRequest = {
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

  export type ListLocationCustomAttributesRequest = {
    /** The ID of the target [location](entity:Location). */
    locationId: string;
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

  export type RetrieveLocationCustomAttributeRequest = {
    /** The ID of the target [location](entity:Location). */
    locationId: string;
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

  export type RetrieveLocationCustomAttributeDefinitionRequest = {
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

  export type UpdateLocationCustomAttributeDefinitionRequestParams = {
    /** The key of the custom attribute definition to update. */
    key: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateLocationCustomAttributeDefinitionRequest;
  };

  export type UpsertLocationCustomAttributeRequestParams = {
    /** The ID of the target [location](entity:Location). */
    locationId: string;
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
    body: UpsertLocationCustomAttributeRequest;
  };
}
