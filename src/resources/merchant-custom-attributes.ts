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
    body: BulkDeleteMerchantCustomAttributesRequest;
  };

  export type BulkUpsertMerchantCustomAttributesRequestParams = {
    body: BulkUpsertMerchantCustomAttributesRequest;
  };

  export type CreateMerchantCustomAttributeDefinitionRequestParams = {
    body: CreateMerchantCustomAttributeDefinitionRequest;
  };

  export type DeleteMerchantCustomAttributeRequest = {
    merchantId: string;
    key: string;
  };

  export type DeleteMerchantCustomAttributeDefinitionRequest = {
    key: string;
  };

  export type ListMerchantCustomAttributeDefinitionsRequest = {
    visibilityFilter?: VisibilityFilter;
    limit?: number;
    cursor?: string;
  };

  export type ListMerchantCustomAttributesRequest = {
    merchantId: string;
    visibilityFilter?: VisibilityFilter;
    limit?: number;
    cursor?: string;
    withDefinitions?: boolean;
  };

  export type RetrieveMerchantCustomAttributeRequest = {
    merchantId: string;
    key: string;
    withDefinition?: boolean;
    version?: number;
  };

  export type RetrieveMerchantCustomAttributeDefinitionRequest = {
    key: string;
    version?: number;
  };

  export type UpdateMerchantCustomAttributeDefinitionRequestParams = {
    key: string;
    body: UpdateMerchantCustomAttributeDefinitionRequest;
  };

  export type UpsertMerchantCustomAttributeRequestParams = {
    merchantId: string;
    key: string;
    body: UpsertMerchantCustomAttributeRequest;
  };
}
