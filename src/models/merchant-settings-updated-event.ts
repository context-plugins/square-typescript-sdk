import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  merchantSettingsUpdatedEventDataSchema,
  type MerchantSettingsUpdatedEventData,
} from "./merchant-settings-updated-event-data.js";

export type MerchantSettingsUpdatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: MerchantSettingsUpdatedEventData;
};

export const merchantSettingsUpdatedEventSchema: Schema<MerchantSettingsUpdatedEvent> =
  s.object<MerchantSettingsUpdatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => merchantSettingsUpdatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
