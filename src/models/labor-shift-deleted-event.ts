import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  laborShiftDeletedEventDataSchema,
  type LaborShiftDeletedEventData,
} from "./labor-shift-deleted-event-data.js";

export type LaborShiftDeletedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: LaborShiftDeletedEventData;
};

export const laborShiftDeletedEventSchema: Schema<LaborShiftDeletedEvent> = s.object<LaborShiftDeletedEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => laborShiftDeletedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
