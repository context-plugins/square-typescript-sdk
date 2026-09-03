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
    body: ObtainTokenRequest;
  };

  export type RevokeTokenRequestParams = {
    body: RevokeTokenRequest;
  };
}
