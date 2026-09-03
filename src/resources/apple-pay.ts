import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import {
  registerDomainRequestSchema,
  type RegisterDomainRequest,
} from "../models/register-domain-request.js";
import {
  registerDomainResponseSchema,
  type RegisterDomainResponse,
} from "../models/register-domain-response.js";
import type { Servers } from "../servers.js";

export class ApplePay {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  registerDomain(
    request: ApplePay.RegisterDomainRequestParams,
    options?: RequestOptions,
  ): ApiPromise<RegisterDomainResponse, ResponseError> {
    return this.#rawClient.execute<RegisterDomainResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/apple-pay/domains"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: registerDomainRequestSchema },
      },
      {
        success: { kind: "json", schema: registerDomainResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ApplePay {
  export type RegisterDomainRequestParams = {
    body: RegisterDomainRequest;
  };
}
