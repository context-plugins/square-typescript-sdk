import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listMerchantsResponseSchema,
  type ListMerchantsResponse,
} from "../models/list-merchants-response.js";
import {
  retrieveMerchantResponseSchema,
  type RetrieveMerchantResponse,
} from "../models/retrieve-merchant-response.js";
import type { Servers } from "../servers.js";

export class Merchants {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listMerchants(
    request: Merchants.ListMerchantsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListMerchantsResponse, ResponseError> {
    return this.#rawClient.execute<ListMerchantsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/merchants"),
        auth: this.#auth.oauth2,
        query: [{ name: "cursor", value: request.cursor, schema: s.optional(s.number()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMerchantsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveMerchant(
    request: Merchants.RetrieveMerchantRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveMerchantResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveMerchantResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/merchants/{merchant_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "merchant_id", value: request.merchantId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveMerchantResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Merchants {
  export type ListMerchantsRequest = {
    cursor?: number;
  };

  export type RetrieveMerchantRequest = {
    merchantId: string;
  };
}
