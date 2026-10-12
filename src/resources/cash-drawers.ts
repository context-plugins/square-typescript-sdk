import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * ListCashDrawerShiftEvents
   *
   * @remarks
   * Provides a paginated list of events for a single cash drawer shift.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCashDrawerShiftEvents(
    request: CashDrawers.ListCashDrawerShiftEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCashDrawerShiftEventsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/cash-drawers/shifts/{shift_id}/events"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "shift_id", value: request.shiftId, schema: s.string() }],
        query: [
          { name: "location_id", value: request.locationId, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCashDrawerShiftEventsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * ListCashDrawerShifts
   *
   * @remarks
   * Provides the details for all of the cash drawer shifts for a location in a date range.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCashDrawerShifts(
    request: CashDrawers.ListCashDrawerShiftsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCashDrawerShiftsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/cash-drawers/shifts"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "location_id", value: request.locationId, schema: s.string() },
          { name: "sort_order", value: request.sortOrder, schema: s.optional(s.lazy(() => sortOrderSchema)) },
          { name: "begin_time", value: request.beginTime, schema: s.optional(s.string()) },
          { name: "end_time", value: request.endTime, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCashDrawerShiftsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveCashDrawerShift
   *
   * @remarks
   * Provides the summary details for a single cash drawer shift. See
   * [ListCashDrawerShiftEvents](api-endpoint:CashDrawers-ListCashDrawerShiftEvents) for a list of
   * cash drawer shift events.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveCashDrawerShift(
    request: CashDrawers.RetrieveCashDrawerShiftRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveCashDrawerShiftResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/cash-drawers/shifts/{shift_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "shift_id", value: request.shiftId, schema: s.string() }],
        query: [{ name: "location_id", value: request.locationId, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveCashDrawerShiftResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace CashDrawers {
  export type ListCashDrawerShiftEventsRequest = {
    /** The shift ID. */
    shiftId: string;
    /** The ID of the location to list cash drawer shifts for. */
    locationId: string;
    /** Number of resources to be returned in a page of results (200 by default, 1000 max). */
    limit?: number;
    /** Opaque cursor for fetching the next page of results. */
    cursor?: string;
  };

  export type ListCashDrawerShiftsRequest = {
    /** The ID of the location to query for a list of cash drawer shifts. */
    locationId: string;
    /**
     * The order in which cash drawer shifts are listed in the response, based on their opened_at
     * field. Default value: ASC
     */
    sortOrder?: SortOrder;
    /** The inclusive start time of the query on opened_at, in ISO 8601 format. */
    beginTime?: string;
    /** The exclusive end date of the query on opened_at, in ISO 8601 format. */
    endTime?: string;
    /** Number of cash drawer shift events in a page of results (200 by default, 1000 max). */
    limit?: number;
    /** Opaque cursor for fetching the next page of results. */
    cursor?: string;
  };

  export type RetrieveCashDrawerShiftRequest = {
    /** The shift ID. */
    shiftId: string;
    /** The ID of the location to retrieve cash drawer shifts from. */
    locationId: string;
  };
}
