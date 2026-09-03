import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import { listSitesResponseSchema, type ListSitesResponse } from "../models/list-sites-response.js";
import type { Servers } from "../servers.js";

export class Sites {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listSites(options?: RequestOptions): ApiPromise<ListSitesResponse, ResponseError> {
    return this.#rawClient.execute<ListSitesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/sites"),
        auth: this.#auth.oauth2,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSitesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}
