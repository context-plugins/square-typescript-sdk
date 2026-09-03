import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { sortOrderSchema, type SortOrder } from "../models/sort-order.js";
import { v1OrderSchema, type V1Order } from "../models/v1-order.js";
import { v1UpdateOrderRequestSchema, type V1UpdateOrderRequest } from "../models/v1-update-order-request.js";
import type { Servers } from "../servers.js";

export class V1Transactions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  v1ListOrders(
    request: V1Transactions.V1ListOrdersRequest,
    options?: RequestOptions,
  ): ApiPromise<V1Order[], ResponseError> {
    return this.#rawClient.execute<V1Order[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v1/{location_id}/orders"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "location_id", value: request.locationId, schema: s.string() }],
        query: [
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => sortOrderSchema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "batch_token", value: request.batchToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => v1OrderSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  v1RetrieveOrder(
    request: V1Transactions.V1RetrieveOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<V1Order, ResponseError> {
    return this.#rawClient.execute<V1Order, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v1/{location_id}/orders/{order_id}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "location_id", value: request.locationId, schema: s.string() },
          { name: "order_id", value: request.orderId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1OrderSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  v1UpdateOrder(
    request: V1Transactions.V1UpdateOrderRequestParams,
    options?: RequestOptions,
  ): ApiPromise<V1Order, ResponseError> {
    return this.#rawClient.execute<V1Order, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v1/{location_id}/orders/{order_id}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "location_id", value: request.locationId, schema: s.string() },
          { name: "order_id", value: request.orderId, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: v1UpdateOrderRequestSchema },
      },
      {
        success: { kind: "json", schema: v1OrderSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace V1Transactions {
  export type V1ListOrdersRequest = {
    locationId: string;
    order?: SortOrder;
    limit?: number;
    batchToken?: string;
  };

  export type V1RetrieveOrderRequest = {
    locationId: string;
    orderId: string;
  };

  export type V1UpdateOrderRequestParams = {
    locationId: string;
    orderId: string;
    body: V1UpdateOrderRequest;
  };
}
