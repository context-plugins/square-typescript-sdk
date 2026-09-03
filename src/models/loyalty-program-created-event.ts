import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyProgramCreatedEventDataSchema,
  type LoyaltyProgramCreatedEventData,
} from "./loyalty-program-created-event-data.js";

export type LoyaltyProgramCreatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: LoyaltyProgramCreatedEventData;
};

export const loyaltyProgramCreatedEventSchema: Schema<LoyaltyProgramCreatedEvent> =
  s.object<LoyaltyProgramCreatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => loyaltyProgramCreatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
