import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalActionUpdatedEventDataSchema,
  type TerminalActionUpdatedEventData,
} from "./terminal-action-updated-event-data.js";

export type TerminalActionUpdatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: TerminalActionUpdatedEventData;
};

export const terminalActionUpdatedEventSchema: Schema<TerminalActionUpdatedEvent> =
  s.object<TerminalActionUpdatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => terminalActionUpdatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
