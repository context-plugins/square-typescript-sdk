import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import { obtainTokenRequestSchema, type ObtainTokenRequest } from "../models/obtain-token-request.js";
import { obtainTokenResponseSchema, type ObtainTokenResponse } from "../models/obtain-token-response.js";
import {
  retrieveTokenStatusResponseSchema,
  type RetrieveTokenStatusResponse,
} from "../models/retrieve-token-status-response.js";
import { revokeTokenRequestSchema, type RevokeTokenRequest } from "../models/revoke-token-request.js";
import { revokeTokenResponseSchema, type RevokeTokenResponse } from "../models/revoke-token-response.js";
import type { Servers } from "../servers.js";

export class OAuth {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * ObtainToken
   *
   * @remarks
   * Returns an OAuth access token and refresh token using the `authorization_code` or
   * `refresh_token` grant type.
   *
   * When `grant_type` is `authorization_code`:
   * - With the [code flow](https://developer.squareup.com/docs/oauth-api/overview#code-flow),
   *   provide `code`, `client_id`, and `client_secret`.
   * - With the [PKCE flow](https://developer.squareup.com/docs/oauth-api/overview#pkce-flow),
   *   provide `code`, `client_id`, and `code_verifier`.
   *
   * When `grant_type` is `refresh_token`:
   * - With the code flow, provide `refresh_token`, `client_id`, and `client_secret`. The response
   *   returns the same refresh token provided in the request.
   * - With the PKCE flow, provide `refresh_token` and `client_id`. The response returns a new
   *   refresh token.
   *
   * You can use the `scopes` parameter to limit the set of permissions authorized by the access
   * token. You can use the `short_lived` parameter to create an access token that expires in 24
   * hours.
   *
   * __Important:__ OAuth tokens should be encrypted and stored on a secure server. Application
   * clients should never interact directly with OAuth tokens.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  obtainToken(
    request: OAuth.ObtainTokenRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ObtainTokenResponse, ResponseError> {
    return this.#rawClient.execute<ObtainTokenResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/oauth2/token"),
        auth: noneAuth,
        body: { kind: "json", value: request.body, schema: obtainTokenRequestSchema },
      },
      {
        success: { kind: "json", schema: obtainTokenResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * RetrieveTokenStatus
   *
   * @remarks
   * Returns information about an [OAuth access
   * token](https://developer.squareup.com/docs/build-basics/access-tokens#get-an-oauth-access-token)
   * or an application’s [personal access
   * token](https://developer.squareup.com/docs/build-basics/access-tokens#get-a-personal-access-token).
   *
   * Add the access token to the Authorization header of the request.
   *
   * __Important:__ The `Authorization` header you provide to this endpoint must have the following
   * format:
   *
   * ```
   * Authorization: Bearer ACCESS_TOKEN
   * ```
   *
   * where `ACCESS_TOKEN` is a [valid production authorization
   * credential](https://developer.squareup.com/docs/build-basics/access-tokens).
   *
   * If the access token is expired or not a valid access token, the endpoint returns an
   * `UNAUTHORIZED` error.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  retrieveTokenStatus(options?: RequestOptions): ApiPromise<RetrieveTokenStatusResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveTokenStatusResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/oauth2/token/status"),
        auth: this.#auth.oauth2,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveTokenStatusResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * RevokeToken
   *
   * @remarks
   * Revokes an access token generated with the OAuth flow.
   *
   * If an account has more than one OAuth access token for your application, this endpoint revokes
   * all of them, regardless of which token you specify.
   *
   * __Important:__ The `Authorization` header for this endpoint must have the following format:
   *
   * ```
   * Authorization: Client APPLICATION_SECRET
   * ```
   *
   * Replace `APPLICATION_SECRET` with the application secret on the **OAuth** page for your
   * application in the Developer Dashboard.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  revokeToken(
    request: OAuth.RevokeTokenRequestParams,
    options?: RequestOptions,
  ): ApiPromise<RevokeTokenResponse, ResponseError> {
    return this.#rawClient.execute<RevokeTokenResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/oauth2/revoke"),
        auth: noneAuth,
        body: { kind: "json", value: request.body, schema: revokeTokenRequestSchema },
      },
      {
        success: { kind: "json", schema: revokeTokenResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace OAuth {
  export type ObtainTokenRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: ObtainTokenRequest;
  };

  export type RevokeTokenRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: RevokeTokenRequest;
  };
}
