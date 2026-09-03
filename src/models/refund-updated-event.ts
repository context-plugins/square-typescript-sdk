import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { refundUpdatedEventDataSchema, type RefundUpdatedEventData } from "./refund-updated-event-data.js";

export type RefundUpdatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: RefundUpdatedEventData;
};

export const refundUpdatedEventSchema: Schema<RefundUpdatedEvent> = s.object<RefundUpdatedEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => refundUpdatedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
