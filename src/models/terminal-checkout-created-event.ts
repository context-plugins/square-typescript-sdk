import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalCheckoutCreatedEventDataSchema,
  type TerminalCheckoutCreatedEventData,
} from "./terminal-checkout-created-event-data.js";

export type TerminalCheckoutCreatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
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
