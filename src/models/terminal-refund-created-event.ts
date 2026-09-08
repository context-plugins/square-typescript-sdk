import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalRefundCreatedEventDataSchema,
  type TerminalRefundCreatedEventData,
} from "./terminal-refund-created-event-data.js";

/** Published when a Terminal API refund is created. */
export type TerminalRefundCreatedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents, `"terminal.refund.created"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** RFC 3339 timestamp of when the event was created. */
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
