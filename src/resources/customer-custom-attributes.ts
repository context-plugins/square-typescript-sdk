import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  bulkUpsertCustomerCustomAttributes(
    request: CustomerCustomAttributes.BulkUpsertCustomerCustomAttributesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkUpsertCustomerCustomAttributesResponse, ResponseError> {
    return this.#rawClient.execute<BulkUpsertCustomerCustomAttributesResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/customers/custom-attributes/bulk-upsert"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: bulkUpsertCustomerCustomAttributesRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkUpsertCustomerCustomAttributesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createCustomerCustomAttributeDefinition(
    request: CustomerCustomAttributes.CreateCustomerCustomAttributeDefinitionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateCustomerCustomAttributeDefinitionResponse, ResponseError> {
    return this.#rawClient.execute<CreateCustomerCustomAttributeDefinitionResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/customers/custom-attribute-definitions"),
        auth: this.#auth.oauth2,
        body: {
          kind: "json",
          value: request.body,
          schema: createCustomerCustomAttributeDefinitionRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: createCustomerCustomAttributeDefinitionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteCustomerCustomAttribute(
    request: CustomerCustomAttributes.DeleteCustomerCustomAttributeRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteCustomerCustomAttributeResponse, ResponseError> {
    return this.#rawClient.execute<DeleteCustomerCustomAttributeResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/customers/{customer_id}/custom-attributes/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "customer_id", value: request.customerId, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteCustomerCustomAttributeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteCustomerCustomAttributeDefinition(
    request: CustomerCustomAttributes.DeleteCustomerCustomAttributeDefinitionRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteCustomerCustomAttributeDefinitionResponse, ResponseError> {
    return this.#rawClient.execute<DeleteCustomerCustomAttributeDefinitionResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/customers/custom-attribute-definitions/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteCustomerCustomAttributeDefinitionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listCustomerCustomAttributeDefinitions(
    request: CustomerCustomAttributes.ListCustomerCustomAttributeDefinitionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCustomerCustomAttributeDefinitionsResponse, ResponseError> {
    return this.#rawClient.execute<ListCustomerCustomAttributeDefinitionsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/customers/custom-attribute-definitions"),
        auth: this.#auth.oauth2,
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCustomerCustomAttributeDefinitionsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listCustomerCustomAttributes(
    request: CustomerCustomAttributes.ListCustomerCustomAttributesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCustomerCustomAttributesResponse, ResponseError> {
    return this.#rawClient.execute<ListCustomerCustomAttributesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/customers/{customer_id}/custom-attributes"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "customer_id", value: request.customerId, schema: s.string() }],
        query: [
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
        success: { kind: "json", schema: listCustomerCustomAttributesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveCustomerCustomAttribute(
    request: CustomerCustomAttributes.RetrieveCustomerCustomAttributeRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveCustomerCustomAttributeResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveCustomerCustomAttributeResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/customers/{customer_id}/custom-attributes/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "customer_id", value: request.customerId, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
        ],
        query: [
          { name: "with_definition", value: request.withDefinition, schema: s.defaulted(s.boolean(), false) },
          { name: "version", value: request.version, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveCustomerCustomAttributeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveCustomerCustomAttributeDefinition(
    request: CustomerCustomAttributes.RetrieveCustomerCustomAttributeDefinitionRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveCustomerCustomAttributeDefinitionResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveCustomerCustomAttributeDefinitionResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/customers/custom-attribute-definitions/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [{ name: "version", value: request.version, schema: s.optional(s.number()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveCustomerCustomAttributeDefinitionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateCustomerCustomAttributeDefinition(
    request: CustomerCustomAttributes.UpdateCustomerCustomAttributeDefinitionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateCustomerCustomAttributeDefinitionResponse, ResponseError> {
    return this.#rawClient.execute<UpdateCustomerCustomAttributeDefinitionResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/customers/custom-attribute-definitions/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: updateCustomerCustomAttributeDefinitionRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: updateCustomerCustomAttributeDefinitionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  upsertCustomerCustomAttribute(
    request: CustomerCustomAttributes.UpsertCustomerCustomAttributeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpsertCustomerCustomAttributeResponse, ResponseError> {
    return this.#rawClient.execute<UpsertCustomerCustomAttributeResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/customers/{customer_id}/custom-attributes/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "customer_id", value: request.customerId, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: upsertCustomerCustomAttributeRequestSchema },
      },
      {
        success: { kind: "json", schema: upsertCustomerCustomAttributeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace CustomerCustomAttributes {
  export type BulkUpsertCustomerCustomAttributesRequestParams = {
    body: BulkUpsertCustomerCustomAttributesRequest;
  };

  export type CreateCustomerCustomAttributeDefinitionRequestParams = {
    body: CreateCustomerCustomAttributeDefinitionRequest;
  };

  export type DeleteCustomerCustomAttributeRequest = {
    customerId: string;
    key: string;
  };

  export type DeleteCustomerCustomAttributeDefinitionRequest = {
    key: string;
  };

  export type ListCustomerCustomAttributeDefinitionsRequest = {
    limit?: number;
    cursor?: string;
  };

  export type ListCustomerCustomAttributesRequest = {
    customerId: string;
    limit?: number;
    cursor?: string;
    withDefinitions?: boolean;
  };

  export type RetrieveCustomerCustomAttributeRequest = {
    customerId: string;
    key: string;
    withDefinition?: boolean;
    version?: number;
  };

  export type RetrieveCustomerCustomAttributeDefinitionRequest = {
    key: string;
    version?: number;
  };

  export type UpdateCustomerCustomAttributeDefinitionRequestParams = {
    key: string;
    body: UpdateCustomerCustomAttributeDefinitionRequest;
  };

  export type UpsertCustomerCustomAttributeRequestParams = {
    customerId: string;
    key: string;
    body: UpsertCustomerCustomAttributeRequest;
  };
}
