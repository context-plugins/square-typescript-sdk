import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bookingCustomAttributeUpsertResponseSchema,
  type BookingCustomAttributeUpsertResponse,
} from "./booking-custom-attribute-upsert-response.js";
import { errorSchema, type Error } from "./error.js";

export type BulkUpsertBookingCustomAttributesResponse = {
  values?: Record<string, BookingCustomAttributeUpsertResponse>;
  errors?: Error[];
};

export const bulkUpsertBookingCustomAttributesResponseSchema: Schema<BulkUpsertBookingCustomAttributesResponse> =
  s.object<BulkUpsertBookingCustomAttributesResponse>({
    values: s.optional(
      s.record(
        s.string(),
        s.lazy(() => bookingCustomAttributeUpsertResponseSchema),
      ),
    ),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
