import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * CreateGiftCard
   *
   * @remarks
   * Creates a digital gift card or registers a physical (plastic) gift card. The resulting gift
   * card has a `PENDING` state. To activate a gift card so that it can be redeemed for purchases,
   * call [CreateGiftCardActivity](api-endpoint:GiftCardActivities-CreateGiftCardActivity) and
   * create an `ACTIVATE` activity with the initial balance. Alternatively, you can use
   * [RefundPayment](api-endpoint:Refunds-RefundPayment) to refund a payment to the new gift card.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createGiftCard(
    request: GiftCards.CreateGiftCardRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateGiftCardResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/gift-cards"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createGiftCardRequestSchema },
      },
      {
        success: { kind: "json", schema: createGiftCardResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * LinkCustomerToGiftCard
   *
   * @remarks
   * Links a customer to a gift card, which is also referred to as adding a card on file.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  linkCustomerToGiftCard(
    request: GiftCards.LinkCustomerToGiftCardRequestParams,
    options?: RequestOptions,
  ): ApiPromise<LinkCustomerToGiftCardResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/gift-cards/{gift_card_id}/link-customer"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "gift_card_id", value: request.giftCardId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: linkCustomerToGiftCardRequestSchema },
      },
      {
        success: { kind: "json", schema: linkCustomerToGiftCardResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * ListGiftCards
   *
   * @remarks
   * Lists all gift cards. You can specify optional filters to retrieve a subset of the gift cards.
   * Results are sorted by `created_at` in ascending order.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listGiftCards(
    request: GiftCards.ListGiftCardsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListGiftCardsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/gift-cards"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: s.optional(s.string()) },
          { name: "state", value: request.state, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "customer_id", value: request.customerId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listGiftCardsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveGiftCard
   *
   * @remarks
   * Retrieves a gift card using the gift card ID.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveGiftCard(
    request: GiftCards.RetrieveGiftCardRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveGiftCardResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/gift-cards/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveGiftCardResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveGiftCardFromGAN
   *
   * @remarks
   * Retrieves a gift card using the gift card account number (GAN).
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveGiftCardFromGan(
    request: GiftCards.RetrieveGiftCardFromGanRequestParams,
    options?: RequestOptions,
  ): ApiPromise<RetrieveGiftCardFromGanResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/gift-cards/from-gan"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: retrieveGiftCardFromGanRequestSchema },
      },
      {
        success: { kind: "json", schema: retrieveGiftCardFromGanResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveGiftCardFromNonce
   *
   * @remarks
   * Retrieves a gift card using a secure payment token that represents the gift card.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveGiftCardFromNonce(
    request: GiftCards.RetrieveGiftCardFromNonceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<RetrieveGiftCardFromNonceResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/gift-cards/from-nonce"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: retrieveGiftCardFromNonceRequestSchema },
      },
      {
        success: { kind: "json", schema: retrieveGiftCardFromNonceResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * UnlinkCustomerFromGiftCard
   *
   * @remarks
   * Unlinks a customer from a gift card, which is also referred to as removing a card on file.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unlinkCustomerFromGiftCard(
    request: GiftCards.UnlinkCustomerFromGiftCardRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UnlinkCustomerFromGiftCardResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/gift-cards/{gift_card_id}/unlink-customer"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "gift_card_id", value: request.giftCardId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: unlinkCustomerFromGiftCardRequestSchema },
      },
      {
        success: { kind: "json", schema: unlinkCustomerFromGiftCardResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace GiftCards {
  export type CreateGiftCardRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateGiftCardRequest;
  };

  export type LinkCustomerToGiftCardRequestParams = {
    /** The ID of the gift card to be linked. */
    giftCardId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: LinkCustomerToGiftCardRequest;
  };

  export type ListGiftCardsRequest = {
    /**
     * If a [type](entity:GiftCardType) is provided, the endpoint returns gift cards of the
     * specified type. Otherwise, the endpoint returns gift cards of all types.
     */
    type?: string;
    /**
     * If a [state](entity:GiftCardStatus) is provided, the endpoint returns the gift cards in the
     * specified state. Otherwise, the endpoint returns the gift cards of all states.
     */
    state?: string;
    /**
     * If a limit is provided, the endpoint returns only the specified number of results per page.
     * The maximum value is 200. The default value is 30. For more information, see
     * [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    limit?: number;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this cursor to
     * retrieve the next set of results for the original query. If a cursor is not provided, the
     * endpoint returns the first page of the results. For more information, see
     * [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    cursor?: string;
    /**
     * If a customer ID is provided, the endpoint returns only the gift cards linked to the
     * specified customer.
     */
    customerId?: string;
  };

  export type RetrieveGiftCardRequest = {
    /** The ID of the gift card to retrieve. */
    id: string;
  };

  export type RetrieveGiftCardFromGanRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: RetrieveGiftCardFromGanRequest;
  };

  export type RetrieveGiftCardFromNonceRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: RetrieveGiftCardFromNonceRequest;
  };

  export type UnlinkCustomerFromGiftCardRequestParams = {
    /** The ID of the gift card to be unlinked. */
    giftCardId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UnlinkCustomerFromGiftCardRequest;
  };
}
