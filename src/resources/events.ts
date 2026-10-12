import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  disableEventsResponseSchema,
  type DisableEventsResponse,
} from "../models/disable-events-response.js";
import { enableEventsResponseSchema, type EnableEventsResponse } from "../models/enable-events-response.js";
import {
  listEventTypesResponseSchema,
  type ListEventTypesResponse,
} from "../models/list-event-types-response.js";
import { searchEventsRequestSchema, type SearchEventsRequest } from "../models/search-events-request.js";
import { searchEventsResponseSchema, type SearchEventsResponse } from "../models/search-events-response.js";
import type { Servers } from "../servers.js";

export class Events {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * DisableEvents
   *
   * @remarks
   * Disables events to prevent them from being searchable. All events are disabled by default. You
   * must enable events to make them searchable. Disabling events for a specific time period
   * prevents them from being searchable, even if you re-enable them later.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  disableEvents(options?: RequestOptions): ApiPromise<DisableEventsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v2/events/disable"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: disableEventsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * EnableEvents
   *
   * @remarks
   * Enables events to make them searchable. Only events that occur while in the enabled state are
   * searchable.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  enableEvents(options?: RequestOptions): ApiPromise<EnableEventsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v2/events/enable"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: enableEventsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * ListEventTypes
   *
   * @remarks
   * Lists all event types that you can subscribe to as webhooks or query using the Events API.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEventTypes(
    request: Events.ListEventTypesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListEventTypesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/events/types"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [{ name: "api_version", value: request.apiVersion, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listEventTypesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * SearchEvents
   *
   * @remarks
   * Search for Square API events that occur within a 28-day timeframe.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchEvents(
    request: Events.SearchEventsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchEventsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/events"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchEventsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchEventsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Events {
  export type ListEventTypesRequest = {
    /**
     * The API version for which to list event types. Setting this field overrides the default
     * version used by the application.
     */
    apiVersion?: string;
  };

  export type SearchEventsRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: SearchEventsRequest;
  };
}
