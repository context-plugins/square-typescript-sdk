import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  captureTransaction(
    request: Transactions.CaptureTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<CaptureTransactionResponse, ResponseError> {
    return this.#rawClient.execute<CaptureTransactionResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/locations/{location_id}/transactions/{transaction_id}/capture"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "location_id", value: request.locationId, schema: s.string() },
          { name: "transaction_id", value: request.transactionId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: captureTransactionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listTransactions(
    request: Transactions.ListTransactionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTransactionsResponse, ResponseError> {
    return this.#rawClient.execute<ListTransactionsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/locations/{location_id}/transactions"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "location_id", value: request.locationId, schema: s.string() }],
        query: [
          { name: "begin_time", value: request.beginTime, schema: s.optional(s.string()) },
          { name: "end_time", value: request.endTime, schema: s.optional(s.string()) },
          { name: "sort_order", value: request.sortOrder, schema: s.optional(s.lazy(() => sortOrderSchema)) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTransactionsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveTransaction(
    request: Transactions.RetrieveTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveTransactionResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveTransactionResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/locations/{location_id}/transactions/{transaction_id}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "location_id", value: request.locationId, schema: s.string() },
          { name: "transaction_id", value: request.transactionId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveTransactionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  voidTransaction(
    request: Transactions.VoidTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<VoidTransactionResponse, ResponseError> {
    return this.#rawClient.execute<VoidTransactionResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/locations/{location_id}/transactions/{transaction_id}/void"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "location_id", value: request.locationId, schema: s.string() },
          { name: "transaction_id", value: request.transactionId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: voidTransactionResponseSchema },
        errorFactory: ResponseError,
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
    locationId: string;
    beginTime?: string;
    endTime?: string;
    sortOrder?: SortOrder;
    cursor?: string;
  };

  export type RetrieveTransactionRequest = {
    locationId: string;
    transactionId: string;
  };

  export type VoidTransactionRequest = {
    locationId: string;
    transactionId: string;
  };
}
