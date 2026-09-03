import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  disableEvents(options?: RequestOptions): ApiPromise<DisableEventsResponse, ResponseError> {
    return this.#rawClient.execute<DisableEventsResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/events/disable"),
        auth: this.#auth.oauth2,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: disableEventsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  enableEvents(options?: RequestOptions): ApiPromise<EnableEventsResponse, ResponseError> {
    return this.#rawClient.execute<EnableEventsResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/events/enable"),
        auth: this.#auth.oauth2,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: enableEventsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listEventTypes(
    request: Events.ListEventTypesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListEventTypesResponse, ResponseError> {
    return this.#rawClient.execute<ListEventTypesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/events/types"),
        auth: this.#auth.oauth2,
        query: [{ name: "api_version", value: request.apiVersion, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listEventTypesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  searchEvents(
    request: Events.SearchEventsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchEventsResponse, ResponseError> {
    return this.#rawClient.execute<SearchEventsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/events"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: searchEventsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchEventsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Events {
  export type ListEventTypesRequest = {
    apiVersion?: string;
  };

  export type SearchEventsRequestParams = {
    body: SearchEventsRequest;
  };
}
