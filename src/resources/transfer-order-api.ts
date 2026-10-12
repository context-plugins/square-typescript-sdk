import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  cancelTransferOrderRequestSchema,
  type CancelTransferOrderRequest,
} from "../models/cancel-transfer-order-request.js";
import {
  cancelTransferOrderResponseSchema,
  type CancelTransferOrderResponse,
} from "../models/cancel-transfer-order-response.js";
import {
  createTransferOrderRequestSchema,
  type CreateTransferOrderRequest,
} from "../models/create-transfer-order-request.js";
import {
  createTransferOrderResponseSchema,
  type CreateTransferOrderResponse,
} from "../models/create-transfer-order-response.js";
import {
  deleteTransferOrderResponseSchema,
  type DeleteTransferOrderResponse,
} from "../models/delete-transfer-order-response.js";
import {
  receiveTransferOrderRequestSchema,
  type ReceiveTransferOrderRequest,
} from "../models/receive-transfer-order-request.js";
import {
  receiveTransferOrderResponseSchema,
  type ReceiveTransferOrderResponse,
} from "../models/receive-transfer-order-response.js";
import {
  retrieveTransferOrderResponseSchema,
  type RetrieveTransferOrderResponse,
} from "../models/retrieve-transfer-order-response.js";
import {
  searchTransferOrdersRequestSchema,
  type SearchTransferOrdersRequest,
} from "../models/search-transfer-orders-request.js";
import {
  searchTransferOrdersResponseSchema,
  type SearchTransferOrdersResponse,
} from "../models/search-transfer-orders-response.js";
import {
  startTransferOrderRequestSchema,
  type StartTransferOrderRequest,
} from "../models/start-transfer-order-request.js";
import {
  startTransferOrderResponseSchema,
  type StartTransferOrderResponse,
} from "../models/start-transfer-order-response.js";
import {
  updateTransferOrderRequestSchema,
  type UpdateTransferOrderRequest,
} from "../models/update-transfer-order-request.js";
import {
  updateTransferOrderResponseSchema,
  type UpdateTransferOrderResponse,
} from "../models/update-transfer-order-response.js";
import type { Servers } from "../servers.js";

export class TransferOrderApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * CancelTransferOrder
   *
   * @remarks
   * Cancels a transfer order in [STARTED](entity:TransferOrderStatus) or
   * [PARTIALLY_RECEIVED](entity:TransferOrderStatus) status. Any unreceived quantities will no
   * longer be receivable and will be immediately returned to the source
   * [Location](entity:Location)'s inventory.
   *
   * Common reasons for cancellation:
   * - Items no longer needed at destination
   * - Source location needs the inventory
   * - Order created in error
   *
   * Creates a [transfer_order.updated](webhook:transfer_order.updated) webhook event.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelTransferOrder(
    request: TransferOrderApi.CancelTransferOrderRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CancelTransferOrderResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/transfer-orders/{transfer_order_id}/cancel"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "transfer_order_id", value: request.transferOrderId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: cancelTransferOrderRequestSchema },
      },
      {
        success: { kind: "json", schema: cancelTransferOrderResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * CreateTransferOrder
   *
   * @remarks
   * Creates a new transfer order in [DRAFT](entity:TransferOrderStatus) status. A transfer order
   * represents the intent to move [CatalogItemVariation](entity:CatalogItemVariation)s from one
   * [Location](entity:Location) to another. The source and destination locations must be different
   * and must belong to your Square account.
   *
   * In [DRAFT](entity:TransferOrderStatus) status, you can:
   * - Add or remove items
   * - Modify quantities
   * - Update shipping information
   * - Delete the entire order via
   *   [DeleteTransferOrder](api-endpoint:TransferOrders-DeleteTransferOrder)
   *
   * The request requires source_location_id and destination_location_id. Inventory levels are not
   * affected until the order is started via
   * [StartTransferOrder](api-endpoint:TransferOrders-StartTransferOrder).
   *
   * Common integration points:
   * - Sync with warehouse management systems
   * - Automate regular stock transfers
   * - Initialize transfers from inventory optimization systems
   *
   * Creates a [transfer_order.created](webhook:transfer_order.created) webhook event.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTransferOrder(
    request: TransferOrderApi.CreateTransferOrderRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateTransferOrderResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/transfer-orders"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createTransferOrderRequestSchema },
      },
      {
        success: { kind: "json", schema: createTransferOrderResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * DeleteTransferOrder
   *
   * @remarks
   * Deletes a transfer order in [DRAFT](entity:TransferOrderStatus) status. Only draft orders can
   * be deleted. Once an order is started via
   * [StartTransferOrder](api-endpoint:TransferOrders-StartTransferOrder), it can no longer be
   * deleted.
   *
   * Creates a [transfer_order.deleted](webhook:transfer_order.deleted) webhook event.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteTransferOrder(
    request: TransferOrderApi.DeleteTransferOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteTransferOrderResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/transfer-orders/{transfer_order_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "transfer_order_id", value: request.transferOrderId, schema: s.string() }],
        query: [{ name: "version", value: request.version, schema: s.optional(s.int()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteTransferOrderResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * ReceiveTransferOrder
   *
   * @remarks
   * Records receipt of [CatalogItemVariation](entity:CatalogItemVariation)s for a transfer order.
   * This endpoint supports partial receiving - you can receive items in multiple batches.
   *
   * For each line item, you can specify:
   * - Quantity received in good condition (added to destination inventory with
   *   [InventoryState](entity:InventoryState) of IN_STOCK)
   * - Quantity damaged during transit/handling (added to destination inventory with
   *   [InventoryState](entity:InventoryState) of WASTE)
   * - Quantity canceled (returned to source location's inventory)
   *
   * The order must be in [STARTED](entity:TransferOrderStatus) or
   * [PARTIALLY_RECEIVED](entity:TransferOrderStatus) status. Received quantities are added to the
   * destination [Location](entity:Location)'s inventory according to their condition. Canceled
   * quantities are immediately returned to the source [Location](entity:Location)'s inventory.
   *
   * When all items are either received, damaged, or canceled, the order moves to
   * [COMPLETED](entity:TransferOrderStatus) status.
   *
   * Creates a [transfer_order.updated](webhook:transfer_order.updated) webhook event.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  receiveTransferOrder(
    request: TransferOrderApi.ReceiveTransferOrderRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ReceiveTransferOrderResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/transfer-orders/{transfer_order_id}/receive"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "transfer_order_id", value: request.transferOrderId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: receiveTransferOrderRequestSchema },
      },
      {
        success: { kind: "json", schema: receiveTransferOrderResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveTransferOrder
   *
   * @remarks
   * Retrieves a specific [TransferOrder](entity:TransferOrder) by ID. Returns the complete order
   * details including:
   *
   * - Basic information (status, dates, notes)
   * - Line items with ordered and received quantities
   * - Source and destination [Location](entity:Location)s
   * - Tracking information (if available)
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveTransferOrder(
    request: TransferOrderApi.RetrieveTransferOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveTransferOrderResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/transfer-orders/{transfer_order_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "transfer_order_id", value: request.transferOrderId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveTransferOrderResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * SearchTransferOrders
   *
   * @remarks
   * Searches for transfer orders using filters. Returns a paginated list of matching
   * [TransferOrder](entity:TransferOrder)s sorted by creation date.
   *
   * Common search scenarios:
   * - Find orders for a source [Location](entity:Location)
   * - Find orders for a destination [Location](entity:Location)
   * - Find orders in a particular [TransferOrderStatus](entity:TransferOrderStatus)
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchTransferOrders(
    request: TransferOrderApi.SearchTransferOrdersRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchTransferOrdersResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/transfer-orders/search"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchTransferOrdersRequestSchema },
      },
      {
        success: { kind: "json", schema: searchTransferOrdersResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * StartTransferOrder
   *
   * @remarks
   * Changes a [DRAFT](entity:TransferOrderStatus) transfer order to
   * [STARTED](entity:TransferOrderStatus) status. This decrements inventory at the source
   * [Location](entity:Location) and marks it as in-transit.
   *
   * The order must be in [DRAFT](entity:TransferOrderStatus) status and have all required fields
   * populated. Once started, the order can no longer be deleted, but it can be canceled via
   * [CancelTransferOrder](api-endpoint:TransferOrders-CancelTransferOrder).
   *
   * Creates a [transfer_order.updated](webhook:transfer_order.updated) webhook event.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startTransferOrder(
    request: TransferOrderApi.StartTransferOrderRequestParams,
    options?: RequestOptions,
  ): ApiPromise<StartTransferOrderResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/transfer-orders/{transfer_order_id}/start"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "transfer_order_id", value: request.transferOrderId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: startTransferOrderRequestSchema },
      },
      {
        success: { kind: "json", schema: startTransferOrderResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * UpdateTransferOrder
   *
   * @remarks
   * Updates an existing transfer order. This endpoint supports sparse updates, allowing you to
   * modify specific fields without affecting others.
   *
   * Creates a [transfer_order.updated](webhook:transfer_order.updated) webhook event.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateTransferOrder(
    request: TransferOrderApi.UpdateTransferOrderRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateTransferOrderResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v2/transfer-orders/{transfer_order_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "transfer_order_id", value: request.transferOrderId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateTransferOrderRequestSchema },
      },
      {
        success: { kind: "json", schema: updateTransferOrderResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TransferOrderApi {
  export type CancelTransferOrderRequestParams = {
    /** The ID of the transfer order to cancel. Must be in STARTED or PARTIALLY_RECEIVED status. */
    transferOrderId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CancelTransferOrderRequest;
  };

  export type CreateTransferOrderRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateTransferOrderRequest;
  };

  export type DeleteTransferOrderRequest = {
    /** The ID of the transfer order to delete */
    transferOrderId: string;
    /** Version for optimistic concurrency */
    version?: number;
  };

  export type ReceiveTransferOrderRequestParams = {
    /** The ID of the transfer order to receive items for */
    transferOrderId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: ReceiveTransferOrderRequest;
  };

  export type RetrieveTransferOrderRequest = {
    /** The ID of the transfer order to retrieve */
    transferOrderId: string;
  };

  export type SearchTransferOrdersRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: SearchTransferOrdersRequest;
  };

  export type StartTransferOrderRequestParams = {
    /** The ID of the transfer order to start. Must be in DRAFT status. */
    transferOrderId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: StartTransferOrderRequest;
  };

  export type UpdateTransferOrderRequestParams = {
    /** The ID of the transfer order to update */
    transferOrderId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateTransferOrderRequest;
  };
}
