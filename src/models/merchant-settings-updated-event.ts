import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  merchantSettingsUpdatedEventDataSchema,
  type MerchantSettingsUpdatedEventData,
} from "./merchant-settings-updated-event-data.js";

/** Published when online checkout merchant settings are updated */
export type MerchantSettingsUpdatedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents, `"online_checkout.merchant_settings.updated"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** RFC 3339 timestamp of when the event was created. */
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
