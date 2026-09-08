import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CancelBookingRequest = {
  /** A unique key to make this request an idempotent operation. */
  idempotencyKey?: string | null;
  /** The revision number for the booking used for optimistic concurrency. */
  bookingVersion?: number | null;
};

export const cancelBookingRequestSchema: Schema<CancelBookingRequest> = s.object<CancelBookingRequest>({
  idempotencyKey: s.optionalNullable(s.string()),
  bookingVersion: s.optionalNullable(s.number()),
  _keysMap: {
    idempotencyKey: "idempotency_key",
    bookingVersion: "booking_version",
  },
});
