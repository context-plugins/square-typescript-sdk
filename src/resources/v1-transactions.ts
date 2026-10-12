import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * V1ListOrders
   *
   * @remarks
   * Provides summary information for a merchant's online store orders.
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
  v1ListOrders(
    request: V1Transactions.V1ListOrdersRequest,
    options?: RequestOptions,
  ): ApiPromise<V1Order[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/{location_id}/orders"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "location_id", value: request.locationId, schema: s.string() }],
        query: [
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => sortOrderSchema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "batch_token", value: request.batchToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => v1OrderSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1RetrieveOrder
   *
   * @remarks
   * Provides comprehensive information for a single online store order, including the order's
   * history.
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
  v1RetrieveOrder(
    request: V1Transactions.V1RetrieveOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<V1Order, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/{location_id}/orders/{order_id}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "location_id", value: request.locationId, schema: s.string() },
          { name: "order_id", value: request.orderId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1OrderSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1UpdateOrder
   *
   * @remarks
   * Updates the details of an online store order. Every update you perform on an order corresponds
   * to one of three actions:
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
  v1UpdateOrder(
    request: V1Transactions.V1UpdateOrderRequestParams,
    options?: RequestOptions,
  ): ApiPromise<V1Order, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v1/{location_id}/orders/{order_id}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "location_id", value: request.locationId, schema: s.string() },
          { name: "order_id", value: request.orderId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1UpdateOrderRequestSchema },
      },
      {
        success: { kind: "json", schema: v1OrderSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace V1Transactions {
  export type V1ListOrdersRequest = {
    /** The ID of the location to list online store orders for. */
    locationId: string;
    /** The order in which payments are listed in the response. */
    order?: SortOrder;
    /**
     * The maximum number of payments to return in a single response. This value cannot exceed 200.
     */
    limit?: number;
    /**
     * A pagination cursor to retrieve the next set of results for your original query to the
     * endpoint.
     */
    batchToken?: string;
  };

  export type V1RetrieveOrderRequest = {
    /** The ID of the order's associated location. */
    locationId: string;
    /**
     * The order's Square-issued ID. You obtain this value from Order objects returned by the List
     * Orders endpoint
     */
    orderId: string;
  };

  export type V1UpdateOrderRequestParams = {
    /** The ID of the order's associated location. */
    locationId: string;
    /**
     * The order's Square-issued ID. You obtain this value from Order objects returned by the List
     * Orders endpoint
     */
    orderId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: V1UpdateOrderRequest;
  };
}
