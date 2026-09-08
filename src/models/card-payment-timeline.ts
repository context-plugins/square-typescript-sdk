import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The timeline for card payments. */
export type CardPaymentTimeline = {
  /** The timestamp when the payment was authorized, in RFC 3339 format. */
  authorizedAt?: string | null;
  /** The timestamp when the payment was captured, in RFC 3339 format. */
  capturedAt?: string | null;
  /** The timestamp when the payment was voided, in RFC 3339 format. */
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
