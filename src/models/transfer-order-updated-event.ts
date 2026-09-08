import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferOrderUpdatedEventDataSchema,
  type TransferOrderUpdatedEventData,
} from "./transfer-order-updated-event-data.js";

/** Published when a transfer_order is updated. */
export type TransferOrderUpdatedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents, `"transfer_order.updated"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was created, in RFC 3339 format. */
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
