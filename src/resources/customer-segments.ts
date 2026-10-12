import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  listCustomerSegmentsResponseSchema,
  type ListCustomerSegmentsResponse,
} from "../models/list-customer-segments-response.js";
import {
  retrieveCustomerSegmentResponseSchema,
  type RetrieveCustomerSegmentResponse,
} from "../models/retrieve-customer-segment-response.js";
import type { Servers } from "../servers.js";

export class CustomerSegments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * ListCustomerSegments
   *
   * @remarks
   * Retrieves the list of customer segments of a business.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomerSegments(
    request: CustomerSegments.ListCustomerSegmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCustomerSegmentsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/customers/segments"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCustomerSegmentsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveCustomerSegment
   *
   * @remarks
   * Retrieves a specific customer segment as identified by the `segment_id` value.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveCustomerSegment(
    request: CustomerSegments.RetrieveCustomerSegmentRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveCustomerSegmentResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/customers/segments/{segment_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "segment_id", value: request.segmentId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveCustomerSegmentResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace CustomerSegments {
  export type ListCustomerSegmentsRequest = {
    /**
     * A pagination cursor returned by previous calls to `ListCustomerSegments`. This cursor is used
     * to retrieve the next set of query results.
     *
     * For more information, see
     * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
    /**
     * The maximum number of results to return in a single page. This limit is advisory. The
     * response might contain more or fewer results. If the specified limit is less than 1 or
     * greater than 50, Square returns a `400 VALUE_TOO_LOW` or `400 VALUE_TOO_HIGH` error. The
     * default value is 50.
     *
     * For more information, see
     * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    limit?: number;
  };

  export type RetrieveCustomerSegmentRequest = {
    /** The Square-issued ID of the customer segment. */
    segmentId: string;
  };
}
