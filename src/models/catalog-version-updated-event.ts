import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  catalogVersionUpdatedEventDataSchema,
  type CatalogVersionUpdatedEventData,
} from "./catalog-version-updated-event-data.js";

export type CatalogVersionUpdatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
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
