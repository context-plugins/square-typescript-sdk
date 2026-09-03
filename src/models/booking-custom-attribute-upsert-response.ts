import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customAttributeSchema, type CustomAttribute } from "./custom-attribute.js";
import { errorSchema, type Error } from "./error.js";

export type BookingCustomAttributeUpsertResponse = {
  bookingId?: string;
  customAttribute?: CustomAttribute;
  errors?: Error[];
};

export const bookingCustomAttributeUpsertResponseSchema: Schema<BookingCustomAttributeUpsertResponse> =
  s.object<BookingCustomAttributeUpsertResponse>({
    bookingId: s.optional(s.string()),
    customAttribute: s.optional(s.lazy(() => customAttributeSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      bookingId: "booking_id",
      customAttribute: "custom_attribute",
    },
  });
