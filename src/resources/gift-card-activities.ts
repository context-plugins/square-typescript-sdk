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
    body: CreateGiftCardActivityRequest;
  };

  export type ListGiftCardActivitiesRequest = {
    giftCardId?: string;
    type?: string;
    locationId?: string;
    beginTime?: string;
    endTime?: string;
    limit?: number;
    cursor?: string;
    sortOrder?: string;
  };
}
