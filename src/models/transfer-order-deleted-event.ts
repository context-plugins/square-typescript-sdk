import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferOrderDeletedEventDataSchema,
  type TransferOrderDeletedEventData,
} from "./transfer-order-deleted-event-data.js";

/** Published when a transfer_order is deleted. */
export type TransferOrderDeletedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents, `"transfer_order.deleted"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was created, in RFC 3339 format. */
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
