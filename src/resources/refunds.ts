import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  getPaymentRefundResponseSchema,
  type GetPaymentRefundResponse,
} from "../models/get-payment-refund-response.js";
import {
  listPaymentRefundsRequestSortFieldSchema,
  type ListPaymentRefundsRequestSortField,
} from "../models/list-payment-refunds-request-sort-field.js";
import {
  listPaymentRefundsResponseSchema,
  type ListPaymentRefundsResponse,
} from "../models/list-payment-refunds-response.js";
import { refundPaymentRequestSchema, type RefundPaymentRequest } from "../models/refund-payment-request.js";
import {
  refundPaymentResponseSchema,
  type RefundPaymentResponse,
} from "../models/refund-payment-response.js";
import type { Servers } from "../servers.js";

export class Refunds {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getPaymentRefund(
    request: Refunds.GetPaymentRefundRequest,
    options?: RequestOptions,
  ): ApiPromise<GetPaymentRefundResponse, ResponseError> {
    return this.#rawClient.execute<GetPaymentRefundResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/refunds/{refund_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "refund_id", value: request.refundId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getPaymentRefundResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listPaymentRefunds(
    request: Refunds.ListPaymentRefundsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListPaymentRefundsResponse, ResponseError> {
    return this.#rawClient.execute<ListPaymentRefundsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/refunds"),
        auth: this.#auth.oauth2,
        query: [
          { name: "begin_time", value: request.beginTime, schema: s.optional(s.string()) },
          { name: "end_time", value: request.endTime, schema: s.optional(s.string()) },
          { name: "sort_order", value: request.sortOrder, schema: s.optional(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "location_id", value: request.locationId, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.string()) },
          { name: "source_type", value: request.sourceType, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          {
            name: "updated_at_begin_time",
            value: request.updatedAtBeginTime,
            schema: s.optional(s.string()),
          },
          { name: "updated_at_end_time", value: request.updatedAtEndTime, schema: s.optional(s.string()) },
          {
            name: "sort_field",
            value: request.sortField,
            schema: s.optional(s.lazy(() => listPaymentRefundsRequestSortFieldSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listPaymentRefundsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  refundPayment(
    request: Refunds.RefundPaymentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<RefundPaymentResponse, ResponseError> {
    return this.#rawClient.execute<RefundPaymentResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/refunds"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: refundPaymentRequestSchema },
      },
      {
        success: { kind: "json", schema: refundPaymentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Refunds {
  export type GetPaymentRefundRequest = {
    refundId: string;
  };

  export type ListPaymentRefundsRequest = {
    beginTime?: string;
    endTime?: string;
    sortOrder?: string;
    cursor?: string;
    locationId?: string;
    status?: string;
    sourceType?: string;
    limit?: number;
    updatedAtBeginTime?: string;
    updatedAtEndTime?: string;
    sortField?: ListPaymentRefundsRequestSortField;
  };

  export type RefundPaymentRequestParams = {
    body: RefundPaymentRequest;
  };
}
