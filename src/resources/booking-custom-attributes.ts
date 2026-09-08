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

  /**
   * BulkDeleteBookingCustomAttributes
   *
   * @remarks
   * Bulk deletes bookings custom attributes.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth
   * scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
   * `APPOINTMENTS_WRITE` for the OAuth scope.
   *
   * For calls to this endpoint with seller-level permissions to succeed, the seller must have
   * subscribed to *Appointments Plus* or *Appointments Premium*.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * BulkUpsertBookingCustomAttributes
   *
   * @remarks
   * Bulk upserts bookings custom attributes.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth
   * scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
   * `APPOINTMENTS_WRITE` for the OAuth scope.
   *
   * For calls to this endpoint with seller-level permissions to succeed, the seller must have
   * subscribed to *Appointments Plus* or *Appointments Premium*.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * CreateBookingCustomAttributeDefinition
   *
   * @remarks
   * Creates a bookings custom attribute definition.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth
   * scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
   * `APPOINTMENTS_WRITE` for the OAuth scope.
   *
   * For calls to this endpoint with seller-level permissions to succeed, the seller must have
   * subscribed to *Appointments Plus* or *Appointments Premium*.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * DeleteBookingCustomAttribute
   *
   * @remarks
   * Deletes a bookings custom attribute.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth
   * scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
   * `APPOINTMENTS_WRITE` for the OAuth scope.
   *
   * For calls to this endpoint with seller-level permissions to succeed, the seller must have
   * subscribed to *Appointments Plus* or *Appointments Premium*.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * DeleteBookingCustomAttributeDefinition
   *
   * @remarks
   * Deletes a bookings custom attribute definition.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth
   * scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
   * `APPOINTMENTS_WRITE` for the OAuth scope.
   *
   * For calls to this endpoint with seller-level permissions to succeed, the seller must have
   * subscribed to *Appointments Plus* or *Appointments Premium*.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * ListBookingCustomAttributeDefinitions
   *
   * @remarks
   * Get all bookings custom attribute definitions.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth
   * scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
   * `APPOINTMENTS_READ` for the OAuth scope.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * ListBookingCustomAttributes
   *
   * @remarks
   * Lists a booking's custom attributes.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth
   * scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
   * `APPOINTMENTS_READ` for the OAuth scope.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * RetrieveBookingCustomAttribute
   *
   * @remarks
   * Retrieves a bookings custom attribute.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth
   * scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
   * `APPOINTMENTS_READ` for the OAuth scope.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * RetrieveBookingCustomAttributeDefinition
   *
   * @remarks
   * Retrieves a bookings custom attribute definition.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth
   * scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
   * `APPOINTMENTS_READ` for the OAuth scope.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * UpdateBookingCustomAttributeDefinition
   *
   * @remarks
   * Updates a bookings custom attribute definition.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth
   * scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
   * `APPOINTMENTS_WRITE` for the OAuth scope.
   *
   * For calls to this endpoint with seller-level permissions to succeed, the seller must have
   * subscribed to *Appointments Plus* or *Appointments Premium*.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * UpsertBookingCustomAttribute
   *
   * @remarks
   * Upserts a bookings custom attribute.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth
   * scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
   * `APPOINTMENTS_WRITE` for the OAuth scope.
   *
   * For calls to this endpoint with seller-level permissions to succeed, the seller must have
   * subscribed to *Appointments Plus* or *Appointments Premium*.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BulkDeleteBookingCustomAttributesRequest;
  };

  export type BulkUpsertBookingCustomAttributesRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BulkUpsertBookingCustomAttributesRequest;
  };

  export type CreateBookingCustomAttributeDefinitionRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateBookingCustomAttributeDefinitionRequest;
  };

  export type DeleteBookingCustomAttributeRequest = {
    /** The ID of the target [booking](entity:Booking). */
    bookingId: string;
    /**
     * The key of the custom attribute to delete. This key must match the `key` of a custom
     * attribute definition in the Square seller account. If the requesting application is not the
     * definition owner, you must use the qualified key.
     */
    key: string;
  };

  export type DeleteBookingCustomAttributeDefinitionRequest = {
    /** The key of the custom attribute definition to delete. */
    key: string;
  };

  export type ListBookingCustomAttributeDefinitionsRequest = {
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

  export type ListBookingCustomAttributesRequest = {
    /** The ID of the target [booking](entity:Booking). */
    bookingId: string;
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

  export type RetrieveBookingCustomAttributeRequest = {
    /** The ID of the target [booking](entity:Booking). */
    bookingId: string;
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

  export type RetrieveBookingCustomAttributeDefinitionRequest = {
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

  export type UpdateBookingCustomAttributeDefinitionRequestParams = {
    /** The key of the custom attribute definition to update. */
    key: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateBookingCustomAttributeDefinitionRequest;
  };

  export type UpsertBookingCustomAttributeRequestParams = {
    /** The ID of the target [booking](entity:Booking). */
    bookingId: string;
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
    body: UpsertBookingCustomAttributeRequest;
  };
}
