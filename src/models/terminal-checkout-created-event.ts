import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalCheckoutCreatedEventDataSchema,
  type TerminalCheckoutCreatedEventData,
} from "./terminal-checkout-created-event-data.js";

/** Published when a [TerminalCheckout](entity:TerminalCheckout) is created. */
export type TerminalCheckoutCreatedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents, `"terminal.checkout.created"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** RFC 3339 timestamp of when the event was created. */
  createdAt?: string;
  data?: TerminalCheckoutCreatedEventData;
};

export const terminalCheckoutCreatedEventSchema: Schema<TerminalCheckoutCreatedEvent> =
  s.object<TerminalCheckoutCreatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => terminalCheckoutCreatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
