import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bookingCustomAttributeUpsertRequestSchema,
  type BookingCustomAttributeUpsertRequest,
} from "./booking-custom-attribute-upsert-request.js";

export type BulkUpsertBookingCustomAttributesRequest = {
  values: Record<string, BookingCustomAttributeUpsertRequest>;
};

export const bulkUpsertBookingCustomAttributesRequestSchema: Schema<BulkUpsertBookingCustomAttributesRequest> =
  s.object<BulkUpsertBookingCustomAttributesRequest>({
    values: s.record(
      s.string(),
      s.lazy(() => bookingCustomAttributeUpsertRequestSchema),
    ),
  });
