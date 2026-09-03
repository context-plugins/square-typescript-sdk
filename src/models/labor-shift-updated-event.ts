import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  laborShiftUpdatedEventDataSchema,
  type LaborShiftUpdatedEventData,
} from "./labor-shift-updated-event-data.js";

export type LaborShiftUpdatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: LaborShiftUpdatedEventData;
};

export const laborShiftUpdatedEventSchema: Schema<LaborShiftUpdatedEvent> = s.object<LaborShiftUpdatedEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => laborShiftUpdatedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
