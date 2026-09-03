import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  createLocationRequestSchema,
  type CreateLocationRequest,
} from "../models/create-location-request.js";
import {
  createLocationResponseSchema,
  type CreateLocationResponse,
} from "../models/create-location-response.js";
import {
  listLocationsResponseSchema,
  type ListLocationsResponse,
} from "../models/list-locations-response.js";
import {
  retrieveLocationResponseSchema,
  type RetrieveLocationResponse,
} from "../models/retrieve-location-response.js";
import {
  updateLocationRequestSchema,
  type UpdateLocationRequest,
} from "../models/update-location-request.js";
import {
  updateLocationResponseSchema,
  type UpdateLocationResponse,
} from "../models/update-location-response.js";
import type { Servers } from "../servers.js";

export class Locations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createLocation(
    request: Locations.CreateLocationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateLocationResponse, ResponseError> {
    return this.#rawClient.execute<CreateLocationResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/locations"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createLocationRequestSchema },
      },
      {
        success: { kind: "json", schema: createLocationResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listLocations(options?: RequestOptions): ApiPromise<ListLocationsResponse, ResponseError> {
    return this.#rawClient.execute<ListLocationsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/locations"),
        auth: this.#auth.oauth2,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listLocationsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveLocation(
    request: Locations.RetrieveLocationRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveLocationResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveLocationResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/locations/{location_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "location_id", value: request.locationId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveLocationResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateLocation(
    request: Locations.UpdateLocationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateLocationResponse, ResponseError> {
    return this.#rawClient.execute<UpdateLocationResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/locations/{location_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "location_id", value: request.locationId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateLocationRequestSchema },
      },
      {
        success: { kind: "json", schema: updateLocationResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Locations {
  export type CreateLocationRequestParams = {
    body: CreateLocationRequest;
  };

  export type RetrieveLocationRequest = {
    locationId: string;
  };

  export type UpdateLocationRequestParams = {
    locationId: string;
    body: UpdateLocationRequest;
  };
}
