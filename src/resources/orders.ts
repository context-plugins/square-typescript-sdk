import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  batchRetrieveOrdersRequestSchema,
  type BatchRetrieveOrdersRequest,
} from "../models/batch-retrieve-orders-request.js";
import {
  batchRetrieveOrdersResponseSchema,
  type BatchRetrieveOrdersResponse,
} from "../models/batch-retrieve-orders-response.js";
import {
  calculateOrderRequestSchema,
  type CalculateOrderRequest,
} from "../models/calculate-order-request.js";
import {
  calculateOrderResponseSchema,
  type CalculateOrderResponse,
} from "../models/calculate-order-response.js";
import { cloneOrderRequestSchema, type CloneOrderRequest } from "../models/clone-order-request.js";
import { cloneOrderResponseSchema, type CloneOrderResponse } from "../models/clone-order-response.js";
import { createOrderRequestSchema, type CreateOrderRequest } from "../models/create-order-request.js";
import { createOrderResponseSchema, type CreateOrderResponse } from "../models/create-order-response.js";
import { payOrderRequestSchema, type PayOrderRequest } from "../models/pay-order-request.js";
import { payOrderResponseSchema, type PayOrderResponse } from "../models/pay-order-response.js";
import {
  retrieveOrderResponseSchema,
  type RetrieveOrderResponse,
} from "../models/retrieve-order-response.js";
import { searchOrdersRequestSchema, type SearchOrdersRequest } from "../models/search-orders-request.js";
import { searchOrdersResponseSchema, type SearchOrdersResponse } from "../models/search-orders-response.js";
import { updateOrderRequestSchema, type UpdateOrderRequest } from "../models/update-order-request.js";
import { updateOrderResponseSchema, type UpdateOrderResponse } from "../models/update-order-response.js";
import type { Servers } from "../servers.js";

export class Orders {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  batchRetrieveOrders(
    request: Orders.BatchRetrieveOrdersRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BatchRetrieveOrdersResponse, ResponseError> {
    return this.#rawClient.execute<BatchRetrieveOrdersResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/orders/batch-retrieve"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: batchRetrieveOrdersRequestSchema },
      },
      {
        success: { kind: "json", schema: batchRetrieveOrdersResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  calculateOrder(
    request: Orders.CalculateOrderRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CalculateOrderResponse, ResponseError> {
    return this.#rawClient.execute<CalculateOrderResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/orders/calculate"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: calculateOrderRequestSchema },
      },
      {
        success: { kind: "json", schema: calculateOrderResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  cloneOrder(
    request: Orders.CloneOrderRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CloneOrderResponse, ResponseError> {
    return this.#rawClient.execute<CloneOrderResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/orders/clone"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: cloneOrderRequestSchema },
      },
      {
        success: { kind: "json", schema: cloneOrderResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createOrder(
    request: Orders.CreateOrderRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateOrderResponse, ResponseError> {
    return this.#rawClient.execute<CreateOrderResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/orders"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createOrderRequestSchema },
      },
      {
        success: { kind: "json", schema: createOrderResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  payOrder(
    request: Orders.PayOrderRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PayOrderResponse, ResponseError> {
    return this.#rawClient.execute<PayOrderResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/orders/{order_id}/pay"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "order_id", value: request.orderId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: payOrderRequestSchema },
      },
      {
        success: { kind: "json", schema: payOrderResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveOrder(
    request: Orders.RetrieveOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveOrderResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveOrderResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/orders/{order_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "order_id", value: request.orderId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveOrderResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  searchOrders(
    request: Orders.SearchOrdersRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchOrdersResponse, ResponseError> {
    return this.#rawClient.execute<SearchOrdersResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/orders/search"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: searchOrdersRequestSchema },
      },
      {
        success: { kind: "json", schema: searchOrdersResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateOrder(
    request: Orders.UpdateOrderRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateOrderResponse, ResponseError> {
    return this.#rawClient.execute<UpdateOrderResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/orders/{order_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "order_id", value: request.orderId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateOrderRequestSchema },
      },
      {
        success: { kind: "json", schema: updateOrderResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Orders {
  export type BatchRetrieveOrdersRequestParams = {
    body: BatchRetrieveOrdersRequest;
  };

  export type CalculateOrderRequestParams = {
    body: CalculateOrderRequest;
  };

  export type CloneOrderRequestParams = {
    body: CloneOrderRequest;
  };

  export type CreateOrderRequestParams = {
    body: CreateOrderRequest;
  };

  export type PayOrderRequestParams = {
    orderId: string;
    body: PayOrderRequest;
  };

  export type RetrieveOrderRequest = {
    orderId: string;
  };

  export type SearchOrdersRequestParams = {
    body: SearchOrdersRequest;
  };

  export type UpdateOrderRequestParams = {
    orderId: string;
    body: UpdateOrderRequest;
  };
}
