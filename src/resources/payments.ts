import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  cancelPaymentByIdempotencyKeyRequestSchema,
  type CancelPaymentByIdempotencyKeyRequest,
} from "../models/cancel-payment-by-idempotency-key-request.js";
import {
  cancelPaymentByIdempotencyKeyResponseSchema,
  type CancelPaymentByIdempotencyKeyResponse,
} from "../models/cancel-payment-by-idempotency-key-response.js";
import {
  cancelPaymentResponseSchema,
  type CancelPaymentResponse,
} from "../models/cancel-payment-response.js";
import {
  completePaymentRequestSchema,
  type CompletePaymentRequest,
} from "../models/complete-payment-request.js";
import {
  completePaymentResponseSchema,
  type CompletePaymentResponse,
} from "../models/complete-payment-response.js";
import { createPaymentRequestSchema, type CreatePaymentRequest } from "../models/create-payment-request.js";
import {
  createPaymentResponseSchema,
  type CreatePaymentResponse,
} from "../models/create-payment-response.js";
import { getPaymentResponseSchema, type GetPaymentResponse } from "../models/get-payment-response.js";
import {
  listPaymentsRequestSortFieldSchema,
  type ListPaymentsRequestSortField,
} from "../models/list-payments-request-sort-field.js";
import { listPaymentsResponseSchema, type ListPaymentsResponse } from "../models/list-payments-response.js";
import { updatePaymentRequestSchema, type UpdatePaymentRequest } from "../models/update-payment-request.js";
import {
  updatePaymentResponseSchema,
  type UpdatePaymentResponse,
} from "../models/update-payment-response.js";
import type { Servers } from "../servers.js";

export class Payments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  cancelPayment(
    request: Payments.CancelPaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelPaymentResponse, ResponseError> {
    return this.#rawClient.execute<CancelPaymentResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/payments/{payment_id}/cancel"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "payment_id", value: request.paymentId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelPaymentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  cancelPaymentByIdempotencyKey(
    request: Payments.CancelPaymentByIdempotencyKeyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CancelPaymentByIdempotencyKeyResponse, ResponseError> {
    return this.#rawClient.execute<CancelPaymentByIdempotencyKeyResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/payments/cancel"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: cancelPaymentByIdempotencyKeyRequestSchema },
      },
      {
        success: { kind: "json", schema: cancelPaymentByIdempotencyKeyResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  completePayment(
    request: Payments.CompletePaymentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CompletePaymentResponse, ResponseError> {
    return this.#rawClient.execute<CompletePaymentResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/payments/{payment_id}/complete"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "payment_id", value: request.paymentId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: completePaymentRequestSchema },
      },
      {
        success: { kind: "json", schema: completePaymentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createPayment(
    request: Payments.CreatePaymentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreatePaymentResponse, ResponseError> {
    return this.#rawClient.execute<CreatePaymentResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/payments"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createPaymentRequestSchema },
      },
      {
        success: { kind: "json", schema: createPaymentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getPayment(
    request: Payments.GetPaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<GetPaymentResponse, ResponseError> {
    return this.#rawClient.execute<GetPaymentResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/payments/{payment_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "payment_id", value: request.paymentId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getPaymentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listPayments(
    request: Payments.ListPaymentsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListPaymentsResponse, ResponseError> {
    return this.#rawClient.execute<ListPaymentsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/payments"),
        auth: this.#auth.oauth2,
        query: [
          { name: "begin_time", value: request.beginTime, schema: s.optional(s.string()) },
          { name: "end_time", value: request.endTime, schema: s.optional(s.string()) },
          { name: "sort_order", value: request.sortOrder, schema: s.optional(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "location_id", value: request.locationId, schema: s.optional(s.string()) },
          { name: "total", value: request.total, schema: s.optional(s.number()) },
          { name: "last_4", value: request.last4, schema: s.optional(s.string()) },
          { name: "card_brand", value: request.cardBrand, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          {
            name: "is_offline_payment",
            value: request.isOfflinePayment,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "offline_begin_time", value: request.offlineBeginTime, schema: s.optional(s.string()) },
          { name: "offline_end_time", value: request.offlineEndTime, schema: s.optional(s.string()) },
          {
            name: "updated_at_begin_time",
            value: request.updatedAtBeginTime,
            schema: s.optional(s.string()),
          },
          { name: "updated_at_end_time", value: request.updatedAtEndTime, schema: s.optional(s.string()) },
          {
            name: "sort_field",
            value: request.sortField,
            schema: s.optional(s.lazy(() => listPaymentsRequestSortFieldSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listPaymentsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updatePayment(
    request: Payments.UpdatePaymentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdatePaymentResponse, ResponseError> {
    return this.#rawClient.execute<UpdatePaymentResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/payments/{payment_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "payment_id", value: request.paymentId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updatePaymentRequestSchema },
      },
      {
        success: { kind: "json", schema: updatePaymentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Payments {
  export type CancelPaymentRequest = {
    paymentId: string;
  };

  export type CancelPaymentByIdempotencyKeyRequestParams = {
    body: CancelPaymentByIdempotencyKeyRequest;
  };

  export type CompletePaymentRequestParams = {
    paymentId: string;
    body: CompletePaymentRequest;
  };

  export type CreatePaymentRequestParams = {
    body: CreatePaymentRequest;
  };

  export type GetPaymentRequest = {
    paymentId: string;
  };

  export type ListPaymentsRequest = {
    beginTime?: string;
    endTime?: string;
    sortOrder?: string;
    cursor?: string;
    locationId?: string;
    total?: number;
    last4?: string;
    cardBrand?: string;
    limit?: number;
    isOfflinePayment?: boolean;
    offlineBeginTime?: string;
    offlineEndTime?: string;
    updatedAtBeginTime?: string;
    updatedAtEndTime?: string;
    sortField?: ListPaymentsRequestSortField;
  };

  export type UpdatePaymentRequestParams = {
    paymentId: string;
    body: UpdatePaymentRequest;
  };
}
