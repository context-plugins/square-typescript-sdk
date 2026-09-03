import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BookingCustomAttributeDeleteRequest = {
  bookingId: string;
  key: string;
};

export const bookingCustomAttributeDeleteRequestSchema: Schema<BookingCustomAttributeDeleteRequest> =
  s.object<BookingCustomAttributeDeleteRequest>({
    bookingId: s.string(),
    key: s.string(),
    _keysMap: {
      bookingId: "booking_id",
    },
  });
