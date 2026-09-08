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

  /**
   * BatchRetrieveOrders
   *
   * @remarks
   * Retrieves a set of [orders](entity:Order) by their IDs.
   *
   * If a given order ID does not exist, the ID is ignored instead of generating an error.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * CalculateOrder
   *
   * @remarks
   * Enables applications to preview order pricing without creating an order.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * CloneOrder
   *
   * @remarks
   * Creates a new order, in the `DRAFT` state, by duplicating an existing order. The newly created
   * order has only the core fields (such as line items, taxes, and discounts) copied from the
   * original order.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * CreateOrder
   *
   * @remarks
   * Creates a new [order](entity:Order) that can include information about products for purchase
   * and settings to apply to the purchase.
   *
   * To pay for a created order, see [Pay for
   * Orders](https://developer.squareup.com/docs/orders-api/pay-for-orders).
   *
   * You can modify open orders using the [UpdateOrder](api-endpoint:Orders-UpdateOrder) endpoint.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * PayOrder
   *
   * @remarks
   * Pay for an [order](entity:Order) using one or more approved [payments](entity:Payment) or
   * settle an order with a total of `0`.
   *
   * The total of the `payment_ids` listed in the request must be equal to the order total. Orders
   * with a total amount of `0` can be marked as paid by specifying an empty array of `payment_ids`
   * in the request.
   *
   * To be used with `PayOrder`, a payment must:
   *
   * - Reference the order by specifying the `order_id` when [creating the
   *   payment](api-endpoint:Payments-CreatePayment). Any approved payments that reference the same
   *   `order_id` not specified in the `payment_ids` is canceled.
   * - Be approved with [delayed
   *   capture](https://developer.squareup.com/docs/payments-api/take-payments/card-payments/delayed-capture).
   *   Using a delayed capture payment with `PayOrder` completes the approved payment.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * RetrieveOrder
   *
   * @remarks
   * Retrieves an [Order](entity:Order) by ID.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * SearchOrders
   *
   * @remarks
   * Search all orders for one or more locations. Orders include all sales, returns, and exchanges
   * regardless of how or when they entered the Square ecosystem (such as Point of Sale, Invoices,
   * and Connect APIs).
   *
   * `SearchOrders` requests need to specify which locations to search and define a
   * [SearchOrdersQuery](entity:SearchOrdersQuery) object that controls how to sort or filter the
   * results. Your `SearchOrdersQuery` can:
   *
   * Set filter criteria. Set the sort order. Determine whether to return results as complete
   * `Order` objects or as [OrderEntry](entity:OrderEntry) objects.
   *
   * Note that details for orders processed with Square Point of Sale while in offline mode might
   * not be transmitted to Square for up to 72 hours. Offline orders have a `created_at` value that
   * reflects the time the order was created, not the time it was subsequently transmitted to
   * Square.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * UpdateOrder
   *
   * @remarks
   * Updates an open [order](entity:Order) by adding, replacing, or deleting fields. Orders with a
   * `COMPLETED` or `CANCELED` state cannot be updated.
   *
   * An `UpdateOrder` request requires the following:
   *
   * - The `order_id` in the endpoint path, identifying the order to update.
   * - The latest `version` of the order to update.
   * - The [sparse
   *   order](https://developer.squareup.com/docs/orders-api/manage-orders/update-orders#sparse-order-objects)
   *   containing only the fields to update and the version to which the update is being applied.
   * - If deleting fields, the [dot notation
   *   paths](https://developer.squareup.com/docs/orders-api/manage-orders/update-orders#identifying-fields-to-delete)
   *   identifying the fields to clear.
   *
   * To pay for an order, see [Pay for
   * Orders](https://developer.squareup.com/docs/orders-api/pay-for-orders).
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BatchRetrieveOrdersRequest;
  };

  export type CalculateOrderRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CalculateOrderRequest;
  };

  export type CloneOrderRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CloneOrderRequest;
  };

  export type CreateOrderRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateOrderRequest;
  };

  export type PayOrderRequestParams = {
    /** The ID of the order being paid. */
    orderId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: PayOrderRequest;
  };

  export type RetrieveOrderRequest = {
    /** The ID of the order to retrieve. */
    orderId: string;
  };

  export type SearchOrdersRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: SearchOrdersRequest;
  };

  export type UpdateOrderRequestParams = {
    /** The ID of the order to update. */
    orderId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateOrderRequest;
  };
}
