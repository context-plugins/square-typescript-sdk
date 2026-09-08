import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains the metadata of a webhook event type. */
export type EventTypeMetadata = {
  /** The event type. */
  eventType?: string;
  /** The API version at which the event type was introduced. */
  apiVersionIntroduced?: string;
  /** The release status of the event type. */
  releaseStatus?: string;
};

export const eventTypeMetadataSchema: Schema<EventTypeMetadata> = s.object<EventTypeMetadata>({
  eventType: s.optional(s.string()),
  apiVersionIntroduced: s.optional(s.string()),
  releaseStatus: s.optional(s.string()),
  _keysMap: {
    eventType: "event_type",
    apiVersionIntroduced: "api_version_introduced",
    releaseStatus: "release_status",
  },
});
