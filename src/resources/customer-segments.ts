import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  listCustomerSegments(
    request: CustomerSegments.ListCustomerSegmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCustomerSegmentsResponse, ResponseError> {
    return this.#rawClient.execute<ListCustomerSegmentsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/customers/segments"),
        auth: this.#auth.oauth2,
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCustomerSegmentsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveCustomerSegment(
    request: CustomerSegments.RetrieveCustomerSegmentRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveCustomerSegmentResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveCustomerSegmentResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/customers/segments/{segment_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "segment_id", value: request.segmentId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveCustomerSegmentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace CustomerSegments {
  export type ListCustomerSegmentsRequest = {
    cursor?: string;
    limit?: number;
  };

  export type RetrieveCustomerSegmentRequest = {
    segmentId: string;
  };
}
