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

  /**
   * CreateLocation
   *
   * @remarks
   * Creates a [location](https://developer.squareup.com/docs/locations-api). Creating new locations
   * allows for separate configuration of receipt layouts, item prices, and sales reports.
   * Developers can use locations to separate sales activity through applications that integrate
   * with Square from sales activity elsewhere in a seller's account. Locations created
   * programmatically with the Locations API last forever and are visible to the seller for their
   * own management. Therefore, ensure that each location has a sensible and unique name.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * ListLocations
   *
   * @remarks
   * Provides details about all of the seller's
   * [locations](https://developer.squareup.com/docs/locations-api), including those with an
   * inactive status. Locations are listed alphabetically by `name`.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * RetrieveLocation
   *
   * @remarks
   * Retrieves details of a single location. Specify "main" as the location ID to retrieve details
   * of the [main
   * location](https://developer.squareup.com/docs/locations-api#about-the-main-location).
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * UpdateLocation
   *
   * @remarks
   * Updates a [location](https://developer.squareup.com/docs/locations-api).
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateLocationRequest;
  };

  export type RetrieveLocationRequest = {
    /**
     * The ID of the location to retrieve. Specify the string "main" to return the main location.
     */
    locationId: string;
  };

  export type UpdateLocationRequestParams = {
    /** The ID of the location to update. */
    locationId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateLocationRequest;
  };
}
