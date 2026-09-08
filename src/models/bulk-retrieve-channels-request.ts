import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Defines the fields that are included in the request body for the
 * [BulkRetrieveChannels](api-endpoint:Channels-BulkRetrieveChannels) endpoint.
 */
export type BulkRetrieveChannelsRequest = {
  channelIds: string[];
};

export const bulkRetrieveChannelsRequestSchema: Schema<BulkRetrieveChannelsRequest> =
  s.object<BulkRetrieveChannelsRequest>({
    channelIds: s.array(s.string()),
    _keysMap: {
      channelIds: "channel_ids",
    },
  });
