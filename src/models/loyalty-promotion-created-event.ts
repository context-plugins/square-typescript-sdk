import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyPromotionCreatedEventDataSchema,
  type LoyaltyPromotionCreatedEventData,
} from "./loyalty-promotion-created-event-data.js";

export type LoyaltyPromotionCreatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: LoyaltyPromotionCreatedEventData;
};

export const loyaltyPromotionCreatedEventSchema: Schema<LoyaltyPromotionCreatedEvent> =
  s.object<LoyaltyPromotionCreatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => loyaltyPromotionCreatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
