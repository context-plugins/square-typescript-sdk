import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bookingCustomAttributeDeleteResponseSchema,
  type BookingCustomAttributeDeleteResponse,
} from "./booking-custom-attribute-delete-response.js";
import { errorSchema, type Error } from "./error.js";

export type BulkDeleteBookingCustomAttributesResponse = {
  values?: Record<string, BookingCustomAttributeDeleteResponse>;
  errors?: Error[];
};

export const bulkDeleteBookingCustomAttributesResponseSchema: Schema<BulkDeleteBookingCustomAttributesResponse> =
  s.object<BulkDeleteBookingCustomAttributesResponse>({
    values: s.optional(
      s.record(
        s.string(),
        s.lazy(() => bookingCustomAttributeDeleteResponseSchema),
      ),
    ),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
