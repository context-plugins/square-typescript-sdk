import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  createGiftCardActivityRequestSchema,
  type CreateGiftCardActivityRequest,
} from "../models/create-gift-card-activity-request.js";
import {
  createGiftCardActivityResponseSchema,
  type CreateGiftCardActivityResponse,
} from "../models/create-gift-card-activity-response.js";
import {
  listGiftCardActivitiesResponseSchema,
  type ListGiftCardActivitiesResponse,
} from "../models/list-gift-card-activities-response.js";
import type { Servers } from "../servers.js";

export class GiftCardActivities {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * CreateGiftCardActivity
   *
   * @remarks
   * Creates a gift card activity to manage the balance or state of a [gift card](entity:GiftCard).
   * For example, create an `ACTIVATE` activity to activate a gift card with an initial balance
   * before first use.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  createGiftCardActivity(
    request: GiftCardActivities.CreateGiftCardActivityRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateGiftCardActivityResponse, ResponseError> {
    return this.#rawClient.execute<CreateGiftCardActivityResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/gift-cards/activities"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createGiftCardActivityRequestSchema },
      },
      {
        success: { kind: "json", schema: createGiftCardActivityResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * ListGiftCardActivities
   *
   * @remarks
   * Lists gift card activities. By default, you get gift card activities for all gift cards in the
   * seller's account. You can optionally specify query parameters to filter the list. For example,
   * you can get a list of gift card activities for a gift card, for all gift cards in a specific
   * region, or for activities within a time window.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  listGiftCardActivities(
    request: GiftCardActivities.ListGiftCardActivitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListGiftCardActivitiesResponse, ResponseError> {
    return this.#rawClient.execute<ListGiftCardActivitiesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/gift-cards/activities"),
        auth: this.#auth.oauth2,
        query: [
          { name: "gift_card_id", value: request.giftCardId, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.string()) },
          { name: "location_id", value: request.locationId, schema: s.optional(s.string()) },
          { name: "begin_time", value: request.beginTime, schema: s.optional(s.string()) },
          { name: "end_time", value: request.endTime, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "sort_order", value: request.sortOrder, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listGiftCardActivitiesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace GiftCardActivities {
  export type CreateGiftCardActivityRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateGiftCardActivityRequest;
  };

  export type ListGiftCardActivitiesRequest = {
    /**
     * If a gift card ID is provided, the endpoint returns activities related to the specified gift
     * card. Otherwise, the endpoint returns all gift card activities for the seller.
     */
    giftCardId?: string;
    /**
     * If a [type](entity:GiftCardActivityType) is provided, the endpoint returns gift card
     * activities of the specified type. Otherwise, the endpoint returns all types of gift card
     * activities.
     */
    type?: string;
    /**
     * If a location ID is provided, the endpoint returns gift card activities for the specified
     * location. Otherwise, the endpoint returns gift card activities for all locations.
     */
    locationId?: string;
    /**
     * The timestamp for the beginning of the reporting period, in RFC 3339 format. This start time
     * is inclusive. The default value is the current time minus one year.
     */
    beginTime?: string;
    /**
     * The timestamp for the end of the reporting period, in RFC 3339 format. This end time is
     * inclusive. The default value is the current time.
     */
    endTime?: string;
    /**
     * If a limit is provided, the endpoint returns the specified number of results (or fewer) per
     * page. The maximum value is 100. The default value is 50. For more information, see
     * [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    limit?: number;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this cursor to
     * retrieve the next set of results for the original query. If a cursor is not provided, the
     * endpoint returns the first page of the results. For more information, see
     * [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    cursor?: string;
    /**
     * The order in which the endpoint returns the activities, based on `created_at`.
     * - `ASC` - Oldest to newest.
     * - `DESC` - Newest to oldest (default).
     */
    sortOrder?: string;
  };
}
