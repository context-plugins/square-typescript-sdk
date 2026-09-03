import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  bulkDeleteBookingCustomAttributesRequestSchema,
  type BulkDeleteBookingCustomAttributesRequest,
} from "../models/bulk-delete-booking-custom-attributes-request.js";
import {
  bulkDeleteBookingCustomAttributesResponseSchema,
  type BulkDeleteBookingCustomAttributesResponse,
} from "../models/bulk-delete-booking-custom-attributes-response.js";
import {
  bulkUpsertBookingCustomAttributesRequestSchema,
  type BulkUpsertBookingCustomAttributesRequest,
} from "../models/bulk-upsert-booking-custom-attributes-request.js";
import {
  bulkUpsertBookingCustomAttributesResponseSchema,
  type BulkUpsertBookingCustomAttributesResponse,
} from "../models/bulk-upsert-booking-custom-attributes-response.js";
import {
  createBookingCustomAttributeDefinitionRequestSchema,
  type CreateBookingCustomAttributeDefinitionRequest,
} from "../models/create-booking-custom-attribute-definition-request.js";
import {
  createBookingCustomAttributeDefinitionResponseSchema,
  type CreateBookingCustomAttributeDefinitionResponse,
} from "../models/create-booking-custom-attribute-definition-response.js";
import {
  deleteBookingCustomAttributeDefinitionResponseSchema,
  type DeleteBookingCustomAttributeDefinitionResponse,
} from "../models/delete-booking-custom-attribute-definition-response.js";
import {
  deleteBookingCustomAttributeResponseSchema,
  type DeleteBookingCustomAttributeResponse,
} from "../models/delete-booking-custom-attribute-response.js";
import {
  listBookingCustomAttributeDefinitionsResponseSchema,
  type ListBookingCustomAttributeDefinitionsResponse,
} from "../models/list-booking-custom-attribute-definitions-response.js";
import {
  listBookingCustomAttributesResponseSchema,
  type ListBookingCustomAttributesResponse,
} from "../models/list-booking-custom-attributes-response.js";
import {
  retrieveBookingCustomAttributeDefinitionResponseSchema,
  type RetrieveBookingCustomAttributeDefinitionResponse,
} from "../models/retrieve-booking-custom-attribute-definition-response.js";
import {
  retrieveBookingCustomAttributeResponseSchema,
  type RetrieveBookingCustomAttributeResponse,
} from "../models/retrieve-booking-custom-attribute-response.js";
import {
  updateBookingCustomAttributeDefinitionRequestSchema,
  type UpdateBookingCustomAttributeDefinitionRequest,
} from "../models/update-booking-custom-attribute-definition-request.js";
import {
  updateBookingCustomAttributeDefinitionResponseSchema,
  type UpdateBookingCustomAttributeDefinitionResponse,
} from "../models/update-booking-custom-attribute-definition-response.js";
import {
  upsertBookingCustomAttributeRequestSchema,
  type UpsertBookingCustomAttributeRequest,
} from "../models/upsert-booking-custom-attribute-request.js";
import {
  upsertBookingCustomAttributeResponseSchema,
  type UpsertBookingCustomAttributeResponse,
} from "../models/upsert-booking-custom-attribute-response.js";
import type { Servers } from "../servers.js";

export class BookingCustomAttributes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  bulkDeleteBookingCustomAttributes(
    request: BookingCustomAttributes.BulkDeleteBookingCustomAttributesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkDeleteBookingCustomAttributesResponse, ResponseError> {
    return this.#rawClient.execute<BulkDeleteBookingCustomAttributesResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/bookings/custom-attributes/bulk-delete"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: bulkDeleteBookingCustomAttributesRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkDeleteBookingCustomAttributesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  bulkUpsertBookingCustomAttributes(
    request: BookingCustomAttributes.BulkUpsertBookingCustomAttributesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkUpsertBookingCustomAttributesResponse, ResponseError> {
    return this.#rawClient.execute<BulkUpsertBookingCustomAttributesResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/bookings/custom-attributes/bulk-upsert"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: bulkUpsertBookingCustomAttributesRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkUpsertBookingCustomAttributesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createBookingCustomAttributeDefinition(
    request: BookingCustomAttributes.CreateBookingCustomAttributeDefinitionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateBookingCustomAttributeDefinitionResponse, ResponseError> {
    return this.#rawClient.execute<CreateBookingCustomAttributeDefinitionResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/bookings/custom-attribute-definitions"),
        auth: this.#auth.oauth2,
        body: {
          kind: "json",
          value: request.body,
          schema: createBookingCustomAttributeDefinitionRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: createBookingCustomAttributeDefinitionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteBookingCustomAttribute(
    request: BookingCustomAttributes.DeleteBookingCustomAttributeRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteBookingCustomAttributeResponse, ResponseError> {
    return this.#rawClient.execute<DeleteBookingCustomAttributeResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/bookings/{booking_id}/custom-attributes/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "booking_id", value: request.bookingId, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteBookingCustomAttributeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteBookingCustomAttributeDefinition(
    request: BookingCustomAttributes.DeleteBookingCustomAttributeDefinitionRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteBookingCustomAttributeDefinitionResponse, ResponseError> {
    return this.#rawClient.execute<DeleteBookingCustomAttributeDefinitionResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/bookings/custom-attribute-definitions/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteBookingCustomAttributeDefinitionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listBookingCustomAttributeDefinitions(
    request: BookingCustomAttributes.ListBookingCustomAttributeDefinitionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListBookingCustomAttributeDefinitionsResponse, ResponseError> {
    return this.#rawClient.execute<ListBookingCustomAttributeDefinitionsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/bookings/custom-attribute-definitions"),
        auth: this.#auth.oauth2,
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listBookingCustomAttributeDefinitionsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listBookingCustomAttributes(
    request: BookingCustomAttributes.ListBookingCustomAttributesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListBookingCustomAttributesResponse, ResponseError> {
    return this.#rawClient.execute<ListBookingCustomAttributesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/bookings/{booking_id}/custom-attributes"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "booking_id", value: request.bookingId, schema: s.string() }],
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
        success: { kind: "json", schema: listBookingCustomAttributesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveBookingCustomAttribute(
    request: BookingCustomAttributes.RetrieveBookingCustomAttributeRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveBookingCustomAttributeResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveBookingCustomAttributeResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/bookings/{booking_id}/custom-attributes/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "booking_id", value: request.bookingId, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
        ],
        query: [
          { name: "with_definition", value: request.withDefinition, schema: s.defaulted(s.boolean(), false) },
          { name: "version", value: request.version, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveBookingCustomAttributeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveBookingCustomAttributeDefinition(
    request: BookingCustomAttributes.RetrieveBookingCustomAttributeDefinitionRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveBookingCustomAttributeDefinitionResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveBookingCustomAttributeDefinitionResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/bookings/custom-attribute-definitions/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [{ name: "version", value: request.version, schema: s.optional(s.number()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveBookingCustomAttributeDefinitionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateBookingCustomAttributeDefinition(
    request: BookingCustomAttributes.UpdateBookingCustomAttributeDefinitionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateBookingCustomAttributeDefinitionResponse, ResponseError> {
    return this.#rawClient.execute<UpdateBookingCustomAttributeDefinitionResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/bookings/custom-attribute-definitions/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: updateBookingCustomAttributeDefinitionRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: updateBookingCustomAttributeDefinitionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  upsertBookingCustomAttribute(
    request: BookingCustomAttributes.UpsertBookingCustomAttributeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpsertBookingCustomAttributeResponse, ResponseError> {
    return this.#rawClient.execute<UpsertBookingCustomAttributeResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/bookings/{booking_id}/custom-attributes/{key}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "booking_id", value: request.bookingId, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: upsertBookingCustomAttributeRequestSchema },
      },
      {
        success: { kind: "json", schema: upsertBookingCustomAttributeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace BookingCustomAttributes {
  export type BulkDeleteBookingCustomAttributesRequestParams = {
    body: BulkDeleteBookingCustomAttributesRequest;
  };

  export type BulkUpsertBookingCustomAttributesRequestParams = {
    body: BulkUpsertBookingCustomAttributesRequest;
  };

  export type CreateBookingCustomAttributeDefinitionRequestParams = {
    body: CreateBookingCustomAttributeDefinitionRequest;
  };

  export type DeleteBookingCustomAttributeRequest = {
    bookingId: string;
    key: string;
  };

  export type DeleteBookingCustomAttributeDefinitionRequest = {
    key: string;
  };

  export type ListBookingCustomAttributeDefinitionsRequest = {
    limit?: number;
    cursor?: string;
  };

  export type ListBookingCustomAttributesRequest = {
    bookingId: string;
    limit?: number;
    cursor?: string;
    withDefinitions?: boolean;
  };

  export type RetrieveBookingCustomAttributeRequest = {
    bookingId: string;
    key: string;
    withDefinition?: boolean;
    version?: number;
  };

  export type RetrieveBookingCustomAttributeDefinitionRequest = {
    key: string;
    version?: number;
  };

  export type UpdateBookingCustomAttributeDefinitionRequestParams = {
    key: string;
    body: UpdateBookingCustomAttributeDefinitionRequest;
  };

  export type UpsertBookingCustomAttributeRequestParams = {
    bookingId: string;
    key: string;
    body: UpsertBookingCustomAttributeRequest;
  };
}
