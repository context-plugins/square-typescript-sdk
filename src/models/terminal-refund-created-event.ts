import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalRefundCreatedEventDataSchema,
  type TerminalRefundCreatedEventData,
} from "./terminal-refund-created-event-data.js";

export type TerminalRefundCreatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: TerminalRefundCreatedEventData;
};

export const terminalRefundCreatedEventSchema: Schema<TerminalRefundCreatedEvent> =
  s.object<TerminalRefundCreatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => terminalRefundCreatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
