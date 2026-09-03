import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferOrderUpdatedEventDataSchema,
  type TransferOrderUpdatedEventData,
} from "./transfer-order-updated-event-data.js";

export type TransferOrderUpdatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: TransferOrderUpdatedEventData;
};

export const transferOrderUpdatedEventSchema: Schema<TransferOrderUpdatedEvent> =
  s.object<TransferOrderUpdatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => transferOrderUpdatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
