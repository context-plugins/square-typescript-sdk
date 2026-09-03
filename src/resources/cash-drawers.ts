import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listCashDrawerShiftEventsResponseSchema,
  type ListCashDrawerShiftEventsResponse,
} from "../models/list-cash-drawer-shift-events-response.js";
import {
  listCashDrawerShiftsResponseSchema,
  type ListCashDrawerShiftsResponse,
} from "../models/list-cash-drawer-shifts-response.js";
import {
  retrieveCashDrawerShiftResponseSchema,
  type RetrieveCashDrawerShiftResponse,
} from "../models/retrieve-cash-drawer-shift-response.js";
import { sortOrderSchema, type SortOrder } from "../models/sort-order.js";
import type { Servers } from "../servers.js";

export class CashDrawers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listCashDrawerShiftEvents(
    request: CashDrawers.ListCashDrawerShiftEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCashDrawerShiftEventsResponse, ResponseError> {
    return this.#rawClient.execute<ListCashDrawerShiftEventsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/cash-drawers/shifts/{shift_id}/events"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "shift_id", value: request.shiftId, schema: s.string() }],
        query: [
          { name: "location_id", value: request.locationId, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCashDrawerShiftEventsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listCashDrawerShifts(
    request: CashDrawers.ListCashDrawerShiftsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCashDrawerShiftsResponse, ResponseError> {
    return this.#rawClient.execute<ListCashDrawerShiftsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/cash-drawers/shifts"),
        auth: this.#auth.oauth2,
        query: [
          { name: "location_id", value: request.locationId, schema: s.string() },
          { name: "sort_order", value: request.sortOrder, schema: s.optional(s.lazy(() => sortOrderSchema)) },
          { name: "begin_time", value: request.beginTime, schema: s.optional(s.string()) },
          { name: "end_time", value: request.endTime, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCashDrawerShiftsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveCashDrawerShift(
    request: CashDrawers.RetrieveCashDrawerShiftRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveCashDrawerShiftResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveCashDrawerShiftResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/cash-drawers/shifts/{shift_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "shift_id", value: request.shiftId, schema: s.string() }],
        query: [{ name: "location_id", value: request.locationId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveCashDrawerShiftResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace CashDrawers {
  export type ListCashDrawerShiftEventsRequest = {
    shiftId: string;
    locationId: string;
    limit?: number;
    cursor?: string;
  };

  export type ListCashDrawerShiftsRequest = {
    locationId: string;
    sortOrder?: SortOrder;
    beginTime?: string;
    endTime?: string;
    limit?: number;
    cursor?: string;
  };

  export type RetrieveCashDrawerShiftRequest = {
    shiftId: string;
    locationId: string;
  };
}
