import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  laborShiftCreatedEventDataSchema,
  type LaborShiftCreatedEventData,
} from "./labor-shift-created-event-data.js";

export type LaborShiftCreatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: LaborShiftCreatedEventData;
};

export const laborShiftCreatedEventSchema: Schema<LaborShiftCreatedEvent> = s.object<LaborShiftCreatedEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => laborShiftCreatedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
