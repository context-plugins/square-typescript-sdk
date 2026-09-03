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
    payoutId: string;
  };

  export type ListPayoutEntriesRequest = {
    payoutId: string;
    sortOrder?: SortOrder;
    cursor?: string;
    limit?: number;
  };

  export type ListPayoutsRequest = {
    locationId?: string;
    status?: PayoutStatus;
    beginTime?: string;
    endTime?: string;
    sortOrder?: SortOrder;
    cursor?: string;
    limit?: number;
  };
}
