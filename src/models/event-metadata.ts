import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains metadata about a particular [Event](entity:Event). */
export type EventMetadata = {
  /** A unique ID for the event. */
  eventId?: string | null;
  /**
   * The API version of the event. This corresponds to the default API version of the developer
   * application at the time when the event was created.
   */
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
