import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channelSchema, type Channel } from "./channel.js";
import { errorSchema, type Error } from "./error.js";

export type RetrieveChannelResponse = {
  errors?: Error[];
  channel?: Channel;
};

export const retrieveChannelResponseSchema: Schema<RetrieveChannelResponse> =
  s.object<RetrieveChannelResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    channel: s.optional(s.lazy(() => channelSchema)),
  });
