import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { retrieveChannelResponseSchema, type RetrieveChannelResponse } from "./retrieve-channel-response.js";

/**
 * Defines the fields that are included in the request body for the
 * [BulkRetrieveChannels](api-endpoint:Channels-BulkRetrieveChannels) endpoint.
 */
export type BulkRetrieveChannelsResponse = {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /**
   * A map of channel IDs to channel responses which tell whether retrieval for a specific channel
   * is success or not. Channel response of a success retrieval would contain channel info whereas
   * channel response of a failed retrieval would have error info.
   */
  responses?: Record<string, RetrieveChannelResponse>;
};

export const bulkRetrieveChannelsResponseSchema: Schema<BulkRetrieveChannelsResponse> =
  s.object<BulkRetrieveChannelsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    responses: s.optional(
      s.record(
        s.string(),
        s.lazy(() => retrieveChannelResponseSchema),
      ),
    ),
  });
