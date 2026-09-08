import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalRefundUpdatedEventDataSchema,
  type TerminalRefundUpdatedEventData,
} from "./terminal-refund-updated-event-data.js";

/** Published when a Terminal API refund is updated. */
export type TerminalRefundUpdatedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents, `"terminal.refund.updated"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** RFC 3339 timestamp of when the event was created. */
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
