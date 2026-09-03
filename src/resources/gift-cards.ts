import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  createGiftCardRequestSchema,
  type CreateGiftCardRequest,
} from "../models/create-gift-card-request.js";
import {
  createGiftCardResponseSchema,
  type CreateGiftCardResponse,
} from "../models/create-gift-card-response.js";
import {
  linkCustomerToGiftCardRequestSchema,
  type LinkCustomerToGiftCardRequest,
} from "../models/link-customer-to-gift-card-request.js";
import {
  linkCustomerToGiftCardResponseSchema,
  type LinkCustomerToGiftCardResponse,
} from "../models/link-customer-to-gift-card-response.js";
import {
  listGiftCardsResponseSchema,
  type ListGiftCardsResponse,
} from "../models/list-gift-cards-response.js";
import {
  retrieveGiftCardFromGanRequestSchema,
  type RetrieveGiftCardFromGanRequest,
} from "../models/retrieve-gift-card-from-gan-request.js";
import {
  retrieveGiftCardFromGanResponseSchema,
  type RetrieveGiftCardFromGanResponse,
} from "../models/retrieve-gift-card-from-gan-response.js";
import {
  retrieveGiftCardFromNonceRequestSchema,
  type RetrieveGiftCardFromNonceRequest,
} from "../models/retrieve-gift-card-from-nonce-request.js";
import {
  retrieveGiftCardFromNonceResponseSchema,
  type RetrieveGiftCardFromNonceResponse,
} from "../models/retrieve-gift-card-from-nonce-response.js";
import {
  retrieveGiftCardResponseSchema,
  type RetrieveGiftCardResponse,
} from "../models/retrieve-gift-card-response.js";
import {
  unlinkCustomerFromGiftCardRequestSchema,
  type UnlinkCustomerFromGiftCardRequest,
} from "../models/unlink-customer-from-gift-card-request.js";
import {
  unlinkCustomerFromGiftCardResponseSchema,
  type UnlinkCustomerFromGiftCardResponse,
} from "../models/unlink-customer-from-gift-card-response.js";
import type { Servers } from "../servers.js";

export class GiftCards {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createGiftCard(
    request: GiftCards.CreateGiftCardRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateGiftCardResponse, ResponseError> {
    return this.#rawClient.execute<CreateGiftCardResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/gift-cards"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createGiftCardRequestSchema },
      },
      {
        success: { kind: "json", schema: createGiftCardResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  linkCustomerToGiftCard(
    request: GiftCards.LinkCustomerToGiftCardRequestParams,
    options?: RequestOptions,
  ): ApiPromise<LinkCustomerToGiftCardResponse, ResponseError> {
    return this.#rawClient.execute<LinkCustomerToGiftCardResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/gift-cards/{gift_card_id}/link-customer"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "gift_card_id", value: request.giftCardId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: linkCustomerToGiftCardRequestSchema },
      },
      {
        success: { kind: "json", schema: linkCustomerToGiftCardResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listGiftCards(
    request: GiftCards.ListGiftCardsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListGiftCardsResponse, ResponseError> {
    return this.#rawClient.execute<ListGiftCardsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/gift-cards"),
        auth: this.#auth.oauth2,
        query: [
          { name: "type", value: request.type, schema: s.optional(s.string()) },
          { name: "state", value: request.state, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "customer_id", value: request.customerId, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listGiftCardsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveGiftCard(
    request: GiftCards.RetrieveGiftCardRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveGiftCardResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveGiftCardResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/gift-cards/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveGiftCardResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveGiftCardFromGan(
    request: GiftCards.RetrieveGiftCardFromGanRequestParams,
    options?: RequestOptions,
  ): ApiPromise<RetrieveGiftCardFromGanResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveGiftCardFromGanResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/gift-cards/from-gan"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: retrieveGiftCardFromGanRequestSchema },
      },
      {
        success: { kind: "json", schema: retrieveGiftCardFromGanResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveGiftCardFromNonce(
    request: GiftCards.RetrieveGiftCardFromNonceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<RetrieveGiftCardFromNonceResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveGiftCardFromNonceResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/gift-cards/from-nonce"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: retrieveGiftCardFromNonceRequestSchema },
      },
      {
        success: { kind: "json", schema: retrieveGiftCardFromNonceResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  unlinkCustomerFromGiftCard(
    request: GiftCards.UnlinkCustomerFromGiftCardRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UnlinkCustomerFromGiftCardResponse, ResponseError> {
    return this.#rawClient.execute<UnlinkCustomerFromGiftCardResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/gift-cards/{gift_card_id}/unlink-customer"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "gift_card_id", value: request.giftCardId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: unlinkCustomerFromGiftCardRequestSchema },
      },
      {
        success: { kind: "json", schema: unlinkCustomerFromGiftCardResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace GiftCards {
  export type CreateGiftCardRequestParams = {
    body: CreateGiftCardRequest;
  };

  export type LinkCustomerToGiftCardRequestParams = {
    giftCardId: string;
    body: LinkCustomerToGiftCardRequest;
  };

  export type ListGiftCardsRequest = {
    type?: string;
    state?: string;
    limit?: number;
    cursor?: string;
    customerId?: string;
  };

  export type RetrieveGiftCardRequest = {
    id: string;
  };

  export type RetrieveGiftCardFromGanRequestParams = {
    body: RetrieveGiftCardFromGanRequest;
  };

  export type RetrieveGiftCardFromNonceRequestParams = {
    body: RetrieveGiftCardFromNonceRequest;
  };

  export type UnlinkCustomerFromGiftCardRequestParams = {
    giftCardId: string;
    body: UnlinkCustomerFromGiftCardRequest;
  };
}
