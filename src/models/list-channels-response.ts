import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channelSchema, type Channel } from "./channel.js";
import { errorSchema, type Error } from "./error.js";

export type ListChannelsResponse = {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /** List of requested Channel. */
  channels?: Channel[];
  /** The token required to retrieve the next page of results. */
  cursor?: string;
};

export const listChannelsResponseSchema: Schema<ListChannelsResponse> = s.object<ListChannelsResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  channels: s.optional(s.array(s.lazy(() => channelSchema))),
  cursor: s.optional(s.string()),
});
