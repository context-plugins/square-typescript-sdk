import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { eventMetadataSchema, type EventMetadata } from "./event-metadata.js";
import { eventSchema, type Event } from "./event.js";

export type SearchEventsResponse = {
  errors?: Error[];
  events?: Event[];
  metadata?: EventMetadata[];
  cursor?: string;
};

export const searchEventsResponseSchema: Schema<SearchEventsResponse> = s.object<SearchEventsResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  events: s.optional(s.array(s.lazy(() => eventSchema))),
  metadata: s.optional(s.array(s.lazy(() => eventMetadataSchema))),
  cursor: s.optional(s.string()),
});
