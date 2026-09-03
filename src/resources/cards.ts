import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { createCardRequestSchema, type CreateCardRequest } from "../models/create-card-request.js";
import { createCardResponseSchema, type CreateCardResponse } from "../models/create-card-response.js";
import { disableCardResponseSchema, type DisableCardResponse } from "../models/disable-card-response.js";
import { listCardsResponseSchema, type ListCardsResponse } from "../models/list-cards-response.js";
import { retrieveCardResponseSchema, type RetrieveCardResponse } from "../models/retrieve-card-response.js";
import { sortOrderSchema, type SortOrder } from "../models/sort-order.js";
import type { Servers } from "../servers.js";

export class Cards {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createCard(
    request: Cards.CreateCardRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateCardResponse, ResponseError> {
    return this.#rawClient.execute<CreateCardResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/cards"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createCardRequestSchema },
      },
      {
        success: { kind: "json", schema: createCardResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  disableCard(
    request: Cards.DisableCardRequest,
    options?: RequestOptions,
  ): ApiPromise<DisableCardResponse, ResponseError> {
    return this.#rawClient.execute<DisableCardResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/cards/{card_id}/disable"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "card_id", value: request.cardId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: disableCardResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listCards(
    request: Cards.ListCardsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCardsResponse, ResponseError> {
    return this.#rawClient.execute<ListCardsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/cards"),
        auth: this.#auth.oauth2,
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "customer_id", value: request.customerId, schema: s.optional(s.string()) },
          {
            name: "include_disabled",
            value: request.includeDisabled,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "reference_id", value: request.referenceId, schema: s.optional(s.string()) },
          { name: "sort_order", value: request.sortOrder, schema: s.optional(s.lazy(() => sortOrderSchema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCardsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveCard(
    request: Cards.RetrieveCardRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveCardResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveCardResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/cards/{card_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "card_id", value: request.cardId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveCardResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Cards {
  export type CreateCardRequestParams = {
    body: CreateCardRequest;
  };

  export type DisableCardRequest = {
    cardId: string;
  };

  export type ListCardsRequest = {
    cursor?: string;
    customerId?: string;
    includeDisabled?: boolean;
    referenceId?: string;
    sortOrder?: SortOrder;
  };

  export type RetrieveCardRequest = {
    cardId: string;
  };
}
