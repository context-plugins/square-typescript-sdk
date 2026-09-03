import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EventTypeMetadata = {
  eventType?: string;
  apiVersionIntroduced?: string;
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
