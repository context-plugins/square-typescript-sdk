import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EventMetadata = {
  eventId?: string | null;
  apiVersion?: string | null;
};

export const eventMetadataSchema: Schema<EventMetadata> = s.object<EventMetadata>({
  eventId: s.optionalNullable(s.string()),
  apiVersion: s.optionalNullable(s.string()),
  _keysMap: {
    eventId: "event_id",
    apiVersion: "api_version",
  },
});
