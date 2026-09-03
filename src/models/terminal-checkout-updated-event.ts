import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalCheckoutUpdatedEventDataSchema,
  type TerminalCheckoutUpdatedEventData,
} from "./terminal-checkout-updated-event-data.js";

export type TerminalCheckoutUpdatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
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
