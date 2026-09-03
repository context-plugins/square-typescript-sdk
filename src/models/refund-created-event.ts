import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { refundCreatedEventDataSchema, type RefundCreatedEventData } from "./refund-created-event-data.js";

export type RefundCreatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: RefundCreatedEventData;
};

export const refundCreatedEventSchema: Schema<RefundCreatedEvent> = s.object<RefundCreatedEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => refundCreatedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
