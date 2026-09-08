import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { eventTypeMetadataSchema, type EventTypeMetadata } from "./event-type-metadata.js";

/**
 * Defines the fields that are included in the response body of a request to the
 * [ListWebhookEventTypes](api-endpoint:WebhookSubscriptions-ListWebhookEventTypes) endpoint.
 *
 * Note: if there are errors processing the request, the event types field will not be present.
 */
export type ListWebhookEventTypesResponse = {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /** The list of event types. */
  eventTypes?: string[];
  /**
   * Contains the metadata of a webhook event type. For more information, see
   * [EventTypeMetadata](entity:EventTypeMetadata).
   */
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
