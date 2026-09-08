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

  /**
   * ListSites
   *
   * @remarks
   * Lists the Square Online sites that belong to a seller. Sites are listed in descending order by
   * the `created_at` date.
   *
   *
   * __Note:__ Square Online APIs are publicly available as part of an early access program. For
   * more information, see [Early access program for Square Online
   * APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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
