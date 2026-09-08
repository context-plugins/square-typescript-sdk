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

  /**
   * GetPaymentRefund
   *
   * @remarks
   * Retrieves a specific refund using the `refund_id`.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * ListPaymentRefunds
   *
   * @remarks
   * Retrieves a list of refunds for the account making the request.
   *
   * Results are eventually consistent, and new refunds or changes to refunds might take several
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

  /**
   * RefundPayment
   *
   * @remarks
   * Refunds a payment. You can refund the entire payment amount or a portion of it. You can use
   * this endpoint to refund a card payment or record a refund of a cash or external payment. For
   * more information, see [Refund
   * Payment](https://developer.squareup.com/docs/payments-api/refund-payments).
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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
    /** The unique ID for the desired `PaymentRefund`. */
    refundId: string;
  };

  export type ListPaymentRefundsRequest = {
    /**
     * Indicates the start of the time range to retrieve each `PaymentRefund` for, in RFC 3339
     * format. The range is determined using the `created_at` field for each `PaymentRefund`.
     *
     * Default: The current time minus one year.
     */
    beginTime?: string;
    /**
     * Indicates the end of the time range to retrieve each `PaymentRefund` for, in RFC 3339 format.
     * The range is determined using the `created_at` field for each `PaymentRefund`.
     *
     * Default: The current time.
     */
    endTime?: string;
    /**
     * The order in which results are listed by `PaymentRefund.created_at`:
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
     * Limit results to the location supplied. By default, results are returned for all locations
     * associated with the seller.
     */
    locationId?: string;
    /**
     * If provided, only refunds with the given status are returned. For a list of refund status
     * values, see [PaymentRefund](entity:PaymentRefund).
     *
     * Default: If omitted, refunds are returned regardless of their status.
     */
    status?: string;
    /**
     * If provided, only returns refunds whose payments have the indicated source type. Current
     * values include `CARD`, `BANK_ACCOUNT`, `WALLET`, `CASH`, and `EXTERNAL`. For information
     * about these payment source types, see [Take
     * Payments](https://developer.squareup.com/docs/payments-api/take-payments).
     *
     * Default: If omitted, refunds are returned regardless of the source type.
     */
    sourceType?: string;
    /**
     * The maximum number of results to be returned in a single page.
     *
     * It is possible to receive fewer results than the specified limit on a given page.
     *
     * If the supplied value is greater than 100, no more than 100 results are returned.
     *
     * Default: 100
     */
    limit?: number;
    /**
     * Indicates the start of the time range to retrieve each `PaymentRefund` for, in RFC 3339
     * format. The range is determined using the `updated_at` field for each `PaymentRefund`.
     *
     * Default: If omitted, the time range starts at `begin_time`.
     */
    updatedAtBeginTime?: string;
    /**
     * Indicates the end of the time range to retrieve each `PaymentRefund` for, in RFC 3339 format.
     * The range is determined using the `updated_at` field for each `PaymentRefund`.
     *
     * Default: The current time.
     */
    updatedAtEndTime?: string;
    /** The field used to sort results by. The default is `CREATED_AT`. */
    sortField?: ListPaymentRefundsRequestSortField;
  };

  export type RefundPaymentRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: RefundPaymentRequest;
  };
}
