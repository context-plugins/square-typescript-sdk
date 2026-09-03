import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { eventTypeMetadataSchema, type EventTypeMetadata } from "./event-type-metadata.js";

export type ListWebhookEventTypesResponse = {
  errors?: Error[];
  eventTypes?: string[];
  metadata?: EventTypeMetadata[];
};

export const listWebhookEventTypesResponseSchema: Schema<ListWebhookEventTypesResponse> =
  s.object<ListWebhookEventTypesResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    eventTypes: s.optional(s.array(s.string())),
    metadata: s.optional(s.array(s.lazy(() => eventTypeMetadataSchema))),
    _keysMap: {
      eventTypes: "event_types",
    },
  });
