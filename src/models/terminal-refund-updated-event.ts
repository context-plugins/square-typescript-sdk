import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalRefundUpdatedEventDataSchema,
  type TerminalRefundUpdatedEventData,
} from "./terminal-refund-updated-event-data.js";

export type TerminalRefundUpdatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: TerminalRefundUpdatedEventData;
};

export const terminalRefundUpdatedEventSchema: Schema<TerminalRefundUpdatedEvent> =
  s.object<TerminalRefundUpdatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => terminalRefundUpdatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
