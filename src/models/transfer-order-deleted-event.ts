import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferOrderDeletedEventDataSchema,
  type TransferOrderDeletedEventData,
} from "./transfer-order-deleted-event-data.js";

export type TransferOrderDeletedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: TransferOrderDeletedEventData;
};

export const transferOrderDeletedEventSchema: Schema<TransferOrderDeletedEvent> =
  s.object<TransferOrderDeletedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => transferOrderDeletedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
