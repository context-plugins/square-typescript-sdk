import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * CreateCard
   *
   * @remarks
   * Adds a card on file to an existing merchant.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCard(
    request: Cards.CreateCardRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateCardResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/cards"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createCardRequestSchema },
      },
      {
        success: { kind: "json", schema: createCardResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * DisableCard
   *
   * @remarks
   * Disables the card, preventing any further updates or charges. Disabling an already disabled
   * card is allowed but has no effect.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  disableCard(
    request: Cards.DisableCardRequest,
    options?: RequestOptions,
  ): ApiPromise<DisableCardResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/cards/{card_id}/disable"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "card_id", value: request.cardId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: disableCardResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * ListCards
   *
   * @remarks
   * Retrieves a list of cards owned by the account making the request. A max of 25 cards will be
   * returned.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCards(
    request: Cards.ListCardsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCardsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/cards"),
        auth: this.#auth.oauth2,
        pathParams: [],
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
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCardsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveCard
   *
   * @remarks
   * Retrieves details for a specific Card.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveCard(
    request: Cards.RetrieveCardRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveCardResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/cards/{card_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "card_id", value: request.cardId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveCardResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Cards {
  export type CreateCardRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateCardRequest;
  };

  export type DisableCardRequest = {
    /** Unique ID for the desired Card. */
    cardId: string;
  };

  export type ListCardsRequest = {
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve
     * the next set of results for your original query.
     *
     * See
     * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination)
     * for more information.
     */
    cursor?: string;
    /**
     * Limit results to cards associated with the customer supplied. By default, all cards owned by
     * the merchant are returned.
     */
    customerId?: string;
    /**
     * Includes disabled cards. By default, all enabled cards owned by the merchant are returned.
     *
     * @default false
     */
    includeDisabled?: boolean;
    /** Limit results to cards associated with the reference_id supplied. */
    referenceId?: string;
    /**
     * Sorts the returned list by when the card was created with the specified order. This field
     * defaults to ASC.
     */
    sortOrder?: SortOrder;
  };

  export type RetrieveCardRequest = {
    /** Unique ID for the desired Card. */
    cardId: string;
  };
}
