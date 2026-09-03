import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channelSchema, type Channel } from "./channel.js";
import { errorSchema, type Error } from "./error.js";

export type ListChannelsResponse = {
  errors?: Error[];
  channels?: Channel[];
  cursor?: string;
};

export const listChannelsResponseSchema: Schema<ListChannelsResponse> = s.object<ListChannelsResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  channels: s.optional(s.array(s.lazy(() => channelSchema))),
  cursor: s.optional(s.string()),
});
