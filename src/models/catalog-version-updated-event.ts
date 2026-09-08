import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  catalogVersionUpdatedEventDataSchema,
  type CatalogVersionUpdatedEventData,
} from "./catalog-version-updated-event-data.js";

/** Published when the catalog is updated. */
export type CatalogVersionUpdatedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: CatalogVersionUpdatedEventData;
};

export const catalogVersionUpdatedEventSchema: Schema<CatalogVersionUpdatedEvent> =
  s.object<CatalogVersionUpdatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => catalogVersionUpdatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
