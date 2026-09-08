import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalCheckoutUpdatedEventDataSchema,
  type TerminalCheckoutUpdatedEventData,
} from "./terminal-checkout-updated-event-data.js";

/** Published when a [TerminalCheckout](entity:TerminalCheckout) is updated. */
export type TerminalCheckoutUpdatedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents, `"terminal.checkout.updated"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** RFC 3339 timestamp of when the event was created. */
  createdAt?: string;
  data?: TerminalCheckoutUpdatedEventData;
};

export const terminalCheckoutUpdatedEventSchema: Schema<TerminalCheckoutUpdatedEvent> =
  s.object<TerminalCheckoutUpdatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => terminalCheckoutUpdatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
