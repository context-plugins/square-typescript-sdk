import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bookingCustomAttributeDeleteRequestSchema,
  type BookingCustomAttributeDeleteRequest,
} from "./booking-custom-attribute-delete-request.js";

export type BulkDeleteBookingCustomAttributesRequest = {
  values: Record<string, BookingCustomAttributeDeleteRequest>;
};

export const bulkDeleteBookingCustomAttributesRequestSchema: Schema<BulkDeleteBookingCustomAttributesRequest> =
  s.object<BulkDeleteBookingCustomAttributesRequest>({
    values: s.record(
      s.string(),
      s.lazy(() => bookingCustomAttributeDeleteRequestSchema),
    ),
  });
