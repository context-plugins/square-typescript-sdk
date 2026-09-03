import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CardPaymentTimeline = {
  authorizedAt?: string | null;
  capturedAt?: string | null;
  voidedAt?: string | null;
};

export const cardPaymentTimelineSchema: Schema<CardPaymentTimeline> = s.object<CardPaymentTimeline>({
  authorizedAt: s.optionalNullable(s.string()),
  capturedAt: s.optionalNullable(s.string()),
  voidedAt: s.optionalNullable(s.string()),
  _keysMap: {
    authorizedAt: "authorized_at",
    capturedAt: "captured_at",
    voidedAt: "voided_at",
  },
});
