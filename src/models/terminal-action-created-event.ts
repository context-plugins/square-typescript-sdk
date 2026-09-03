import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalActionCreatedEventDataSchema,
  type TerminalActionCreatedEventData,
} from "./terminal-action-created-event-data.js";

export type TerminalActionCreatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: TerminalActionCreatedEventData;
};

export const terminalActionCreatedEventSchema: Schema<TerminalActionCreatedEvent> =
  s.object<TerminalActionCreatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => terminalActionCreatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
