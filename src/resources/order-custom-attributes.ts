import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  bulkDeleteOrderCustomAttributes(
    request: OrderCustomAttributes.BulkDeleteOrderCustomAttributesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkDeleteOrderCustomAttributesResponse, ResponseError> {
    return this.#rawClient.execute<BulkDeleteOrderCustomAttributesResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/orders/custom-attributes/bulk-delete"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: bulkDeleteOrderCustomAttributesRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkDeleteOrderCustomAttributesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  bulkUpsertOrderCustomAttributes(
    request: OrderCustomAttributes.BulkUpsertOrderCustomAttributesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkUpsertOrderCustomAttributesResponse, ResponseError> {
    return this.#rawClient.execute<BulkUpsertOrderCustomAttributesResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/orders/custom-attributes/bulk-upsert"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: bulkUpsertOrderCustomAttributesRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkUpsertOrderCustomAttributesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createOrderCustomAttributeDefinition(
    request: OrderCustomAttributes.CreateOrderCustomAttributeDefinitionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateOrderCustomAttributeDefinitionResponse, ResponseError> {
    return this.#rawClient.execute<CreateOrderCustomAttributeDefinitionResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/orders/custom-attribute-definitions"),
        auth: this.#auth.oauth2,
        body: {
          kind: "json",
          value: request.body,
          schema: createOrderCustomAttributeDefinitionRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: createOrderCustomAttributeDefinitionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteOrderCustomAttribute(
    request: OrderCustomAttributes.DeleteOrderCustomAttributeRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteOrderCustomAttributeResponse, ResponseError> {
    return this.#rawClient.execute<DeleteOrderCustomAttributeResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/orders/{order_id}/custom-attributes/{custom_attribute_key}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "order_id", value: request.orderId, schema: s.string() },
          { name: "custom_attribute_key", value: request.customAttributeKey, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteOrderCustomAttributeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteOrderCustomAttributeDefinition(
    request: OrderCustomAttributes.DeleteOrderCustomAttributeDefinitionRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteOrderCustomAttributeDefinitionResponse, ResponseError> {
    return this.#rawClient.execute<DeleteOrderCustomAttributeDefinitionResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/orders/custom-attribute-definitions/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteOrderCustomAttributeDefinitionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listOrderCustomAttributeDefinitions(
    request: OrderCustomAttributes.ListOrderCustomAttributeDefinitionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListOrderCustomAttributeDefinitionsResponse, ResponseError> {
    return this.#rawClient.execute<ListOrderCustomAttributeDefinitionsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/orders/custom-attribute-definitions"),
        auth: this.#auth.oauth2,
        query: [
          {
            name: "visibility_filter",
            value: request.visibilityFilter,
            schema: s.optional(s.lazy(() => visibilityFilterSchema)),
          },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listOrderCustomAttributeDefinitionsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listOrderCustomAttributes(
    request: OrderCustomAttributes.ListOrderCustomAttributesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListOrderCustomAttributesResponse, ResponseError> {
    return this.#rawClient.execute<ListOrderCustomAttributesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/orders/{order_id}/custom-attributes"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "order_id", value: request.orderId, schema: s.string() }],
        query: [
          {
            name: "visibility_filter",
            value: request.visibilityFilter,
            schema: s.optional(s.lazy(() => visibilityFilterSchema)),
          },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          {
            name: "with_definitions",
            value: request.withDefinitions,
            schema: s.defaulted(s.boolean(), false),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listOrderCustomAttributesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveOrderCustomAttribute(
    request: OrderCustomAttributes.RetrieveOrderCustomAttributeRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveOrderCustomAttributeResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveOrderCustomAttributeResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/orders/{order_id}/custom-attributes/{custom_attribute_key}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "order_id", value: request.orderId, schema: s.string() },
          { name: "custom_attribute_key", value: request.customAttributeKey, schema: s.string() },
        ],
        query: [
          { name: "version", value: request.version, schema: s.optional(s.number()) },
          { name: "with_definition", value: request.withDefinition, schema: s.defaulted(s.boolean(), false) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveOrderCustomAttributeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveOrderCustomAttributeDefinition(
    request: OrderCustomAttributes.RetrieveOrderCustomAttributeDefinitionRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveOrderCustomAttributeDefinitionResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveOrderCustomAttributeDefinitionResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/orders/custom-attribute-definitions/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [{ name: "version", value: request.version, schema: s.optional(s.number()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveOrderCustomAttributeDefinitionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateOrderCustomAttributeDefinition(
    request: OrderCustomAttributes.UpdateOrderCustomAttributeDefinitionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateOrderCustomAttributeDefinitionResponse, ResponseError> {
    return this.#rawClient.execute<UpdateOrderCustomAttributeDefinitionResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/orders/custom-attribute-definitions/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: updateOrderCustomAttributeDefinitionRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: updateOrderCustomAttributeDefinitionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  upsertOrderCustomAttribute(
    request: OrderCustomAttributes.UpsertOrderCustomAttributeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpsertOrderCustomAttributeResponse, ResponseError> {
    return this.#rawClient.execute<UpsertOrderCustomAttributeResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/orders/{order_id}/custom-attributes/{custom_attribute_key}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "order_id", value: request.orderId, schema: s.string() },
          { name: "custom_attribute_key", value: request.customAttributeKey, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: upsertOrderCustomAttributeRequestSchema },
      },
      {
        success: { kind: "json", schema: upsertOrderCustomAttributeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace OrderCustomAttributes {
  export type BulkDeleteOrderCustomAttributesRequestParams = {
    body: BulkDeleteOrderCustomAttributesRequest;
  };

  export type BulkUpsertOrderCustomAttributesRequestParams = {
    body: BulkUpsertOrderCustomAttributesRequest;
  };

  export type CreateOrderCustomAttributeDefinitionRequestParams = {
    body: CreateOrderCustomAttributeDefinitionRequest;
  };

  export type DeleteOrderCustomAttributeRequest = {
    orderId: string;
    customAttributeKey: string;
  };

  export type DeleteOrderCustomAttributeDefinitionRequest = {
    key: string;
  };

  export type ListOrderCustomAttributeDefinitionsRequest = {
    visibilityFilter?: VisibilityFilter;
    cursor?: string;
    limit?: number;
  };

  export type ListOrderCustomAttributesRequest = {
    orderId: string;
    visibilityFilter?: VisibilityFilter;
    cursor?: string;
    limit?: number;
    withDefinitions?: boolean;
  };

  export type RetrieveOrderCustomAttributeRequest = {
    orderId: string;
    customAttributeKey: string;
    version?: number;
    withDefinition?: boolean;
  };

  export type RetrieveOrderCustomAttributeDefinitionRequest = {
    key: string;
    version?: number;
  };

  export type UpdateOrderCustomAttributeDefinitionRequestParams = {
    key: string;
    body: UpdateOrderCustomAttributeDefinitionRequest;
  };

  export type UpsertOrderCustomAttributeRequestParams = {
    orderId: string;
    customAttributeKey: string;
    body: UpsertOrderCustomAttributeRequest;
  };
}
