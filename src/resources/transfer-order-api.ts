import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  cancelTransferOrder(
    request: TransferOrderApi.CancelTransferOrderRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CancelTransferOrderResponse, ResponseError> {
    return this.#rawClient.execute<CancelTransferOrderResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/transfer-orders/{transfer_order_id}/cancel"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "transfer_order_id", value: request.transferOrderId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: cancelTransferOrderRequestSchema },
      },
      {
        success: { kind: "json", schema: cancelTransferOrderResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createTransferOrder(
    request: TransferOrderApi.CreateTransferOrderRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateTransferOrderResponse, ResponseError> {
    return this.#rawClient.execute<CreateTransferOrderResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/transfer-orders"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createTransferOrderRequestSchema },
      },
      {
        success: { kind: "json", schema: createTransferOrderResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteTransferOrder(
    request: TransferOrderApi.DeleteTransferOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteTransferOrderResponse, ResponseError> {
    return this.#rawClient.execute<DeleteTransferOrderResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/transfer-orders/{transfer_order_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "transfer_order_id", value: request.transferOrderId, schema: s.string() }],
        query: [{ name: "version", value: request.version, schema: s.optional(s.number()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteTransferOrderResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  receiveTransferOrder(
    request: TransferOrderApi.ReceiveTransferOrderRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ReceiveTransferOrderResponse, ResponseError> {
    return this.#rawClient.execute<ReceiveTransferOrderResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/transfer-orders/{transfer_order_id}/receive"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "transfer_order_id", value: request.transferOrderId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: receiveTransferOrderRequestSchema },
      },
      {
        success: { kind: "json", schema: receiveTransferOrderResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveTransferOrder(
    request: TransferOrderApi.RetrieveTransferOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveTransferOrderResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveTransferOrderResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/transfer-orders/{transfer_order_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "transfer_order_id", value: request.transferOrderId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveTransferOrderResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  searchTransferOrders(
    request: TransferOrderApi.SearchTransferOrdersRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchTransferOrdersResponse, ResponseError> {
    return this.#rawClient.execute<SearchTransferOrdersResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/transfer-orders/search"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: searchTransferOrdersRequestSchema },
      },
      {
        success: { kind: "json", schema: searchTransferOrdersResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  startTransferOrder(
    request: TransferOrderApi.StartTransferOrderRequestParams,
    options?: RequestOptions,
  ): ApiPromise<StartTransferOrderResponse, ResponseError> {
    return this.#rawClient.execute<StartTransferOrderResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/transfer-orders/{transfer_order_id}/start"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "transfer_order_id", value: request.transferOrderId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: startTransferOrderRequestSchema },
      },
      {
        success: { kind: "json", schema: startTransferOrderResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateTransferOrder(
    request: TransferOrderApi.UpdateTransferOrderRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateTransferOrderResponse, ResponseError> {
    return this.#rawClient.execute<UpdateTransferOrderResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/transfer-orders/{transfer_order_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "transfer_order_id", value: request.transferOrderId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateTransferOrderRequestSchema },
      },
      {
        success: { kind: "json", schema: updateTransferOrderResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TransferOrderApi {
  export type CancelTransferOrderRequestParams = {
    transferOrderId: string;
    body: CancelTransferOrderRequest;
  };

  export type CreateTransferOrderRequestParams = {
    body: CreateTransferOrderRequest;
  };

  export type DeleteTransferOrderRequest = {
    transferOrderId: string;
    version?: number;
  };

  export type ReceiveTransferOrderRequestParams = {
    transferOrderId: string;
    body: ReceiveTransferOrderRequest;
  };

  export type RetrieveTransferOrderRequest = {
    transferOrderId: string;
  };

  export type SearchTransferOrdersRequestParams = {
    body: SearchTransferOrdersRequest;
  };

  export type StartTransferOrderRequestParams = {
    transferOrderId: string;
    body: StartTransferOrderRequest;
  };

  export type UpdateTransferOrderRequestParams = {
    transferOrderId: string;
    body: UpdateTransferOrderRequest;
  };
}
