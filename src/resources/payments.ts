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

  /**
   * CancelPayment
   *
   * @remarks
   * Cancels (voids) a payment. You can use this endpoint to cancel a payment with the APPROVED
   * `status`.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * CancelPaymentByIdempotencyKey
   *
   * @remarks
   * Cancels (voids) a payment identified by the idempotency key that is specified in the request.
   *
   * Use this method when the status of a `CreatePayment` request is unknown (for example, after you
   * send a `CreatePayment` request, a network error occurs and you do not get a response). In this
   * case, you can direct Square to cancel the payment using this endpoint. In the request, you
   * provide the same idempotency key that you provided in your `CreatePayment` request that you
   * want to cancel. After canceling the payment, you can submit your `CreatePayment` request again.
   *
   * Note that if no payment with the specified idempotency key is found, no action is taken and the
   * endpoint returns successfully.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * CompletePayment
   *
   * @remarks
   * Completes (captures) a payment. By default, payments are set to complete immediately after they
   * are created.
   *
   * You can use this endpoint to complete a payment with the APPROVED `status`.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * CreatePayment
   *
   * @remarks
   * Creates a payment using the provided source. You can use this endpoint to charge a card
   * (credit/debit card or Square gift card) or record a payment that the seller received outside of
   * Square (cash payment from a buyer or a payment that an external entity processed on behalf of
   * the seller).
   *
   * The endpoint creates a `Payment` object and returns it in the response.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * GetPayment
   *
   * @remarks
   * Retrieves details for a specific payment.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * ListPayments
   *
   * @remarks
   * Retrieves a list of payments taken by the account making the request.
   *
   * Results are eventually consistent, and new payments or changes to payments might take several
   * seconds to appear.
   *
   * The maximum results per page is 100.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * UpdatePayment
   *
   * @remarks
   * Updates a payment with the APPROVED status. You can update the `amount_money` and `tip_money`
   * using this endpoint.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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
    /** The ID of the payment to cancel. */
    paymentId: string;
  };

  export type CancelPaymentByIdempotencyKeyRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CancelPaymentByIdempotencyKeyRequest;
  };

  export type CompletePaymentRequestParams = {
    /** The unique ID identifying the payment to be completed. */
    paymentId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CompletePaymentRequest;
  };

  export type CreatePaymentRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreatePaymentRequest;
  };

  export type GetPaymentRequest = {
    /** A unique ID for the desired payment. */
    paymentId: string;
  };

  export type ListPaymentsRequest = {
    /**
     * Indicates the start of the time range to retrieve payments for, in RFC 3339 format. The range
     * is determined using the `created_at` field for each Payment. Inclusive. Default: The current
     * time minus one year.
     */
    beginTime?: string;
    /**
     * Indicates the end of the time range to retrieve payments for, in RFC 3339 format. The range
     * is determined using the `created_at` field for each Payment.
     *
     * Default: The current time.
     */
    endTime?: string;
    /**
     * The order in which results are listed by `ListPaymentsRequest.sort_field`:
     * - `ASC` - Oldest to newest.
     * - `DESC` - Newest to oldest (default).
     */
    sortOrder?: string;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this cursor to
     * retrieve the next set of results for the original query.
     *
     * For more information, see
     * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
    /**
     * Limit results to the location supplied. By default, results are returned for the default
     * (main) location associated with the seller.
     */
    locationId?: string;
    /** The exact amount in the `total_money` for a payment. */
    total?: number;
    /** The last four digits of a payment card. */
    last4?: string;
    /** The brand of the payment card (for example, VISA). */
    cardBrand?: string;
    /**
     * The maximum number of results to be returned in a single page. It is possible to receive
     * fewer results than the specified limit on a given page.
     *
     * The default value of 100 is also the maximum allowed value. If the provided value is greater
     * than 100, it is ignored and the default value is used instead.
     *
     * Default: `100`
     */
    limit?: number;
    /** Whether the payment was taken offline or not. @default false */
    isOfflinePayment?: boolean;
    /**
     * Indicates the start of the time range for which to retrieve offline payments, in RFC 3339
     * format for timestamps. The range is determined using the
     * `offline_payment_details.client_created_at` field for each Payment. If set, payments without
     * a value set in `offline_payment_details.client_created_at` will not be returned.
     *
     * Default: The current time.
     */
    offlineBeginTime?: string;
    /**
     * Indicates the end of the time range for which to retrieve offline payments, in RFC 3339
     * format for timestamps. The range is determined using the
     * `offline_payment_details.client_created_at` field for each Payment. If set, payments without
     * a value set in `offline_payment_details.client_created_at` will not be returned.
     *
     * Default: The current time.
     */
    offlineEndTime?: string;
    /**
     * Indicates the start of the time range to retrieve payments for, in RFC 3339 format. The range
     * is determined using the `updated_at` field for each Payment.
     */
    updatedAtBeginTime?: string;
    /**
     * Indicates the end of the time range to retrieve payments for, in RFC 3339 format. The range
     * is determined using the `updated_at` field for each Payment.
     */
    updatedAtEndTime?: string;
    /** The field used to sort results by. The default is `CREATED_AT`. */
    sortField?: ListPaymentsRequestSortField;
  };

  export type UpdatePaymentRequestParams = {
    /** The ID of the payment to update. */
    paymentId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdatePaymentRequest;
  };
}
