import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { retrieveChannelResponseSchema, type RetrieveChannelResponse } from "./retrieve-channel-response.js";

export type BulkRetrieveChannelsResponse = {
  errors?: Error[];
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
