import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  captureTransactionResponseSchema,
  type CaptureTransactionResponse,
} from "../models/capture-transaction-response.js";
import {
  listTransactionsResponseSchema,
  type ListTransactionsResponse,
} from "../models/list-transactions-response.js";
import {
  retrieveTransactionResponseSchema,
  type RetrieveTransactionResponse,
} from "../models/retrieve-transaction-response.js";
import { sortOrderSchema, type SortOrder } from "../models/sort-order.js";
import {
  voidTransactionResponseSchema,
  type VoidTransactionResponse,
} from "../models/void-transaction-response.js";
import type { Servers } from "../servers.js";

export class Transactions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * CaptureTransaction
   *
   * @remarks
   * Captures a transaction that was created with the [Charge](api-endpoint:Transactions-Charge)
   * endpoint with a `delay_capture` value of `true`.
   *
   *
   * See [Delayed capture
   * transactions](https://developer.squareup.com/docs/payments/transactions/overview#delayed-capture)
   * for more information.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  captureTransaction(
    request: Transactions.CaptureTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<CaptureTransactionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v2/locations/{location_id}/transactions/{transaction_id}/capture",
        ),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "location_id", value: request.locationId, schema: s.string() },
          { name: "transaction_id", value: request.transactionId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: captureTransactionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * ListTransactions
   *
   * @remarks
   * Lists transactions for a particular location.
   *
   * Transactions include payment information from sales and exchanges and refund information from
   * returns and exchanges.
   *
   * Max results per [page](https://developer.squareup.com/docs/working-with-apis/pagination): 50
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  listTransactions(
    request: Transactions.ListTransactionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTransactionsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/locations/{location_id}/transactions"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "location_id", value: request.locationId, schema: s.string() }],
        query: [
          { name: "begin_time", value: request.beginTime, schema: s.optional(s.string()) },
          { name: "end_time", value: request.endTime, schema: s.optional(s.string()) },
          { name: "sort_order", value: request.sortOrder, schema: s.optional(s.lazy(() => sortOrderSchema)) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTransactionsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveTransaction
   *
   * @remarks
   * Retrieves details for a single transaction.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  retrieveTransaction(
    request: Transactions.RetrieveTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveTransactionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/locations/{location_id}/transactions/{transaction_id}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "location_id", value: request.locationId, schema: s.string() },
          { name: "transaction_id", value: request.transactionId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveTransactionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * VoidTransaction
   *
   * @remarks
   * Cancels a transaction that was created with the [Charge](api-endpoint:Transactions-Charge)
   * endpoint with a `delay_capture` value of `true`.
   *
   *
   * See [Delayed capture
   * transactions](https://developer.squareup.com/docs/payments/transactions/overview#delayed-capture)
   * for more information.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  voidTransaction(
    request: Transactions.VoidTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<VoidTransactionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/locations/{location_id}/transactions/{transaction_id}/void"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "location_id", value: request.locationId, schema: s.string() },
          { name: "transaction_id", value: request.transactionId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: voidTransactionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Transactions {
  export type CaptureTransactionRequest = {
    locationId: string;
    transactionId: string;
  };

  export type ListTransactionsRequest = {
    /** The ID of the location to list transactions for. */
    locationId: string;
    /**
     * The beginning of the requested reporting period, in RFC 3339 format.
     *
     * See [Date ranges](https://developer.squareup.com/docs/build-basics/working-with-dates) for
     * details on date inclusivity/exclusivity.
     *
     * Default value: The current time minus one year.
     */
    beginTime?: string;
    /**
     * The end of the requested reporting period, in RFC 3339 format.
     *
     * See [Date ranges](https://developer.squareup.com/docs/build-basics/working-with-dates) for
     * details on date inclusivity/exclusivity.
     *
     * Default value: The current time.
     */
    endTime?: string;
    /**
     * The order in which results are listed in the response (`ASC` for oldest first, `DESC` for
     * newest first).
     *
     * Default value: `DESC`
     */
    sortOrder?: SortOrder;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve
     * the next set of results for your original query.
     *
     * See [Paginating results](https://developer.squareup.com/docs/working-with-apis/pagination)
     * for more information.
     */
    cursor?: string;
  };

  export type RetrieveTransactionRequest = {
    /** The ID of the transaction's associated location. */
    locationId: string;
    /** The ID of the transaction to retrieve. */
    transactionId: string;
  };

  export type VoidTransactionRequest = {
    locationId: string;
    transactionId: string;
  };
}
