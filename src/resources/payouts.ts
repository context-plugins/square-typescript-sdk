import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { getPayoutResponseSchema, type GetPayoutResponse } from "../models/get-payout-response.js";
import {
  listPayoutEntriesResponseSchema,
  type ListPayoutEntriesResponse,
} from "../models/list-payout-entries-response.js";
import { listPayoutsResponseSchema, type ListPayoutsResponse } from "../models/list-payouts-response.js";
import { payoutStatusSchema, type PayoutStatus } from "../models/payout-status.js";
import { sortOrderSchema, type SortOrder } from "../models/sort-order.js";
import type { Servers } from "../servers.js";

export class Payouts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * GetPayout
   *
   * @remarks
   * Retrieves details of a specific payout identified by a payout ID. To call this endpoint, set
   * `PAYOUTS_READ` for the OAuth scope.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  getPayout(
    request: Payouts.GetPayoutRequest,
    options?: RequestOptions,
  ): ApiPromise<GetPayoutResponse, ResponseError> {
    return this.#rawClient.execute<GetPayoutResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/payouts/{payout_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "payout_id", value: request.payoutId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getPayoutResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * ListPayoutEntries
   *
   * @remarks
   * Retrieves a list of all payout entries for a specific payout. To call this endpoint, set
   * `PAYOUTS_READ` for the OAuth scope.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  listPayoutEntries(
    request: Payouts.ListPayoutEntriesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListPayoutEntriesResponse, ResponseError> {
    return this.#rawClient.execute<ListPayoutEntriesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/payouts/{payout_id}/payout-entries"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "payout_id", value: request.payoutId, schema: s.string() }],
        query: [
          { name: "sort_order", value: request.sortOrder, schema: s.optional(s.lazy(() => sortOrderSchema)) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listPayoutEntriesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * ListPayouts
   *
   * @remarks
   * Retrieves a list of all payouts for the default location. You can filter payouts by location
   * ID, status, time range, and order them in ascending or descending order. To call this endpoint,
   * set `PAYOUTS_READ` for the OAuth scope.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  listPayouts(
    request: Payouts.ListPayoutsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListPayoutsResponse, ResponseError> {
    return this.#rawClient.execute<ListPayoutsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/payouts"),
        auth: this.#auth.oauth2,
        query: [
          { name: "location_id", value: request.locationId, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => payoutStatusSchema)) },
          { name: "begin_time", value: request.beginTime, schema: s.optional(s.string()) },
          { name: "end_time", value: request.endTime, schema: s.optional(s.string()) },
          { name: "sort_order", value: request.sortOrder, schema: s.optional(s.lazy(() => sortOrderSchema)) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listPayoutsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Payouts {
  export type GetPayoutRequest = {
    /** The ID of the payout to retrieve the information for. */
    payoutId: string;
  };

  export type ListPayoutEntriesRequest = {
    /** The ID of the payout to retrieve the information for. */
    payoutId: string;
    /** The order in which payout entries are listed. */
    sortOrder?: SortOrder;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this cursor to
     * retrieve the next set of results for the original query. For more information, see
     * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     * If request parameters change between requests, subsequent results may contain duplicates or
     * missing records.
     */
    cursor?: string;
    /**
     * The maximum number of results to be returned in a single page. It is possible to receive
     * fewer results than the specified limit on a given page. The default value of 100 is also the
     * maximum allowed value. If the provided value is greater than 100, it is ignored and the
     * default value is used instead. Default: `100`
     */
    limit?: number;
  };

  export type ListPayoutsRequest = {
    /**
     * The ID of the location for which to list the payouts. By default, payouts are returned for
     * the default (main) location associated with the seller.
     */
    locationId?: string;
    /** If provided, only payouts with the given status are returned. */
    status?: PayoutStatus;
    /**
     * The timestamp for the beginning of the payout creation time, in RFC 3339 format. Inclusive.
     * Default: The current time minus one year.
     */
    beginTime?: string;
    /**
     * The timestamp for the end of the payout creation time, in RFC 3339 format. Default: The
     * current time.
     */
    endTime?: string;
    /** The order in which payouts are listed. */
    sortOrder?: SortOrder;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this cursor to
     * retrieve the next set of results for the original query. For more information, see
     * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     * If request parameters change between requests, subsequent results may contain duplicates or
     * missing records.
     */
    cursor?: string;
    /**
     * The maximum number of results to be returned in a single page. It is possible to receive
     * fewer results than the specified limit on a given page. The default value of 100 is also the
     * maximum allowed value. If the provided value is greater than 100, it is ignored and the
     * default value is used instead. Default: `100`
     */
    limit?: number;
  };
}
