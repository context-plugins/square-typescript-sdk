import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type BookingCustomAttributeDeleteResponse = {
  bookingId?: string;
  errors?: Error[];
};

export const bookingCustomAttributeDeleteResponseSchema: Schema<BookingCustomAttributeDeleteResponse> =
  s.object<BookingCustomAttributeDeleteResponse>({
    bookingId: s.optional(s.string()),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      bookingId: "booking_id",
    },
  });
