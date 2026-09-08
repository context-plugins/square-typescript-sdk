import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  bulkRetrieveChannelsRequestSchema,
  type BulkRetrieveChannelsRequest,
} from "../models/bulk-retrieve-channels-request.js";
import {
  bulkRetrieveChannelsResponseSchema,
  type BulkRetrieveChannelsResponse,
} from "../models/bulk-retrieve-channels-response.js";
import { channelStatusSchema, type ChannelStatus } from "../models/channel-status.js";
import { listChannelsResponseSchema, type ListChannelsResponse } from "../models/list-channels-response.js";
import { referenceTypeSchema, type ReferenceType } from "../models/reference-type.js";
import {
  retrieveChannelResponseSchema,
  type RetrieveChannelResponse,
} from "../models/retrieve-channel-response.js";
import type { Servers } from "../servers.js";

export class Channels {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * BulkRetrieveChannels
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  bulkRetrieveChannels(
    request: Channels.BulkRetrieveChannelsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkRetrieveChannelsResponse, ResponseError> {
    return this.#rawClient.execute<BulkRetrieveChannelsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/channels/bulk-retrieve"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: bulkRetrieveChannelsRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkRetrieveChannelsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * ListChannels
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  listChannels(
    request: Channels.ListChannelsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListChannelsResponse, ResponseError> {
    return this.#rawClient.execute<ListChannelsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/channels"),
        auth: this.#auth.oauth2,
        query: [
          {
            name: "reference_type",
            value: request.referenceType,
            schema: s.optional(s.lazy(() => referenceTypeSchema)),
          },
          { name: "reference_id", value: request.referenceId, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => channelStatusSchema)) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listChannelsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * RetrieveChannel
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  retrieveChannel(
    request: Channels.RetrieveChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveChannelResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveChannelResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/channels/{channel_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveChannelResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Channels {
  export type BulkRetrieveChannelsRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BulkRetrieveChannelsRequest;
  };

  export type ListChannelsRequest = {
    /** Type of reference associated to channel */
    referenceType?: ReferenceType;
    /** id of reference associated to channel */
    referenceId?: string;
    /** Status of channel */
    status?: ChannelStatus;
    /** Cursor to fetch the next result */
    cursor?: string;
    /**
     * Maximum number of results to return. When not provided the returned results will be cap at
     * 100 channels.
     */
    limit?: number;
  };

  export type RetrieveChannelRequest = {
    /** A channel id */
    channelId: string;
  };
}
