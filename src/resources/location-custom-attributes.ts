import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  bulkDeleteLocationCustomAttributes(
    request: LocationCustomAttributes.BulkDeleteLocationCustomAttributesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkDeleteLocationCustomAttributesResponse, ResponseError> {
    return this.#rawClient.execute<BulkDeleteLocationCustomAttributesResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/locations/custom-attributes/bulk-delete"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: bulkDeleteLocationCustomAttributesRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkDeleteLocationCustomAttributesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  bulkUpsertLocationCustomAttributes(
    request: LocationCustomAttributes.BulkUpsertLocationCustomAttributesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkUpsertLocationCustomAttributesResponse, ResponseError> {
    return this.#rawClient.execute<BulkUpsertLocationCustomAttributesResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/locations/custom-attributes/bulk-upsert"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: bulkUpsertLocationCustomAttributesRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkUpsertLocationCustomAttributesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createLocationCustomAttributeDefinition(
    request: LocationCustomAttributes.CreateLocationCustomAttributeDefinitionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateLocationCustomAttributeDefinitionResponse, ResponseError> {
    return this.#rawClient.execute<CreateLocationCustomAttributeDefinitionResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/locations/custom-attribute-definitions"),
        auth: this.#auth.oauth2,
        body: {
          kind: "json",
          value: request.body,
          schema: createLocationCustomAttributeDefinitionRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: createLocationCustomAttributeDefinitionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteLocationCustomAttribute(
    request: LocationCustomAttributes.DeleteLocationCustomAttributeRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteLocationCustomAttributeResponse, ResponseError> {
    return this.#rawClient.execute<DeleteLocationCustomAttributeResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/locations/{location_id}/custom-attributes/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "location_id", value: request.locationId, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteLocationCustomAttributeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteLocationCustomAttributeDefinition(
    request: LocationCustomAttributes.DeleteLocationCustomAttributeDefinitionRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteLocationCustomAttributeDefinitionResponse, ResponseError> {
    return this.#rawClient.execute<DeleteLocationCustomAttributeDefinitionResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/locations/custom-attribute-definitions/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteLocationCustomAttributeDefinitionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listLocationCustomAttributeDefinitions(
    request: LocationCustomAttributes.ListLocationCustomAttributeDefinitionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListLocationCustomAttributeDefinitionsResponse, ResponseError> {
    return this.#rawClient.execute<ListLocationCustomAttributeDefinitionsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/locations/custom-attribute-definitions"),
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
        success: { kind: "json", schema: listLocationCustomAttributeDefinitionsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listLocationCustomAttributes(
    request: LocationCustomAttributes.ListLocationCustomAttributesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListLocationCustomAttributesResponse, ResponseError> {
    return this.#rawClient.execute<ListLocationCustomAttributesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/locations/{location_id}/custom-attributes"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "location_id", value: request.locationId, schema: s.string() }],
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
        success: { kind: "json", schema: listLocationCustomAttributesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveLocationCustomAttribute(
    request: LocationCustomAttributes.RetrieveLocationCustomAttributeRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveLocationCustomAttributeResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveLocationCustomAttributeResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/locations/{location_id}/custom-attributes/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "location_id", value: request.locationId, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
        ],
        query: [
          { name: "with_definition", value: request.withDefinition, schema: s.defaulted(s.boolean(), false) },
          { name: "version", value: request.version, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveLocationCustomAttributeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveLocationCustomAttributeDefinition(
    request: LocationCustomAttributes.RetrieveLocationCustomAttributeDefinitionRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveLocationCustomAttributeDefinitionResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveLocationCustomAttributeDefinitionResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/locations/custom-attribute-definitions/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [{ name: "version", value: request.version, schema: s.optional(s.number()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveLocationCustomAttributeDefinitionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateLocationCustomAttributeDefinition(
    request: LocationCustomAttributes.UpdateLocationCustomAttributeDefinitionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateLocationCustomAttributeDefinitionResponse, ResponseError> {
    return this.#rawClient.execute<UpdateLocationCustomAttributeDefinitionResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/locations/custom-attribute-definitions/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: updateLocationCustomAttributeDefinitionRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: updateLocationCustomAttributeDefinitionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  upsertLocationCustomAttribute(
    request: LocationCustomAttributes.UpsertLocationCustomAttributeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpsertLocationCustomAttributeResponse, ResponseError> {
    return this.#rawClient.execute<UpsertLocationCustomAttributeResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/locations/{location_id}/custom-attributes/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "location_id", value: request.locationId, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: upsertLocationCustomAttributeRequestSchema },
      },
      {
        success: { kind: "json", schema: upsertLocationCustomAttributeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace LocationCustomAttributes {
  export type BulkDeleteLocationCustomAttributesRequestParams = {
    body: BulkDeleteLocationCustomAttributesRequest;
  };

  export type BulkUpsertLocationCustomAttributesRequestParams = {
    body: BulkUpsertLocationCustomAttributesRequest;
  };

  export type CreateLocationCustomAttributeDefinitionRequestParams = {
    body: CreateLocationCustomAttributeDefinitionRequest;
  };

  export type DeleteLocationCustomAttributeRequest = {
    locationId: string;
    key: string;
  };

  export type DeleteLocationCustomAttributeDefinitionRequest = {
    key: string;
  };

  export type ListLocationCustomAttributeDefinitionsRequest = {
    visibilityFilter?: VisibilityFilter;
    limit?: number;
    cursor?: string;
  };

  export type ListLocationCustomAttributesRequest = {
    locationId: string;
    visibilityFilter?: VisibilityFilter;
    limit?: number;
    cursor?: string;
    withDefinitions?: boolean;
  };

  export type RetrieveLocationCustomAttributeRequest = {
    locationId: string;
    key: string;
    withDefinition?: boolean;
    version?: number;
  };

  export type RetrieveLocationCustomAttributeDefinitionRequest = {
    key: string;
    version?: number;
  };

  export type UpdateLocationCustomAttributeDefinitionRequestParams = {
    key: string;
    body: UpdateLocationCustomAttributeDefinitionRequest;
  };

  export type UpsertLocationCustomAttributeRequestParams = {
    locationId: string;
    key: string;
    body: UpsertLocationCustomAttributeRequest;
  };
}
