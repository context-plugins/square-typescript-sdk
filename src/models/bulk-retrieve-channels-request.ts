import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
