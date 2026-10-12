import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

  /**
   * RegisterDomain
   *
   * @remarks
   * Activates a domain for use with Apple Pay on the Web and Square. A validation is performed on
   * this domain by Apple to ensure that it is properly set up as an Apple Pay enabled domain.
   *
   * This endpoint provides an easy way for platform developers to bulk activate Apple Pay on the
   * Web with Square for merchants using their platform.
   *
   * Note: You will need to host a valid domain verification file on your domain to support Apple
   * Pay. The current version of this file is always available at
   * https://app.squareup.com/digital-wallets/apple-pay/apple-developer-merchantid-domain-association,
   * and should be hosted at `.well_known/apple-developer-merchantid-domain-association` on your
   * domain. This file is subject to change; we strongly recommend checking for updates regularly
   * and avoiding long-lived caches that might not keep in sync with the correct file version.
   *
   * To learn more about the Web Payments SDK and how to add Apple Pay, see [Take an Apple Pay
   * Payment](https://developer.squareup.com/docs/web-payments/apple-pay).
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  registerDomain(
    request: ApplePay.RegisterDomainRequestParams,
    options?: RequestOptions,
  ): ApiPromise<RegisterDomainResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/apple-pay/domains"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: registerDomainRequestSchema },
      },
      {
        success: { kind: "json", schema: registerDomainResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ApplePay {
  export type RegisterDomainRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: RegisterDomainRequest;
  };
}
