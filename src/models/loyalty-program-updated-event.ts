import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyProgramUpdatedEventDataSchema,
  type LoyaltyProgramUpdatedEventData,
} from "./loyalty-program-updated-event-data.js";

export type LoyaltyProgramUpdatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: LoyaltyProgramUpdatedEventData;
};

export const loyaltyProgramUpdatedEventSchema: Schema<LoyaltyProgramUpdatedEvent> =
  s.object<LoyaltyProgramUpdatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => loyaltyProgramUpdatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
