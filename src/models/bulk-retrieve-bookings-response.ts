import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { retrieveBookingResponseSchema, type RetrieveBookingResponse } from "./retrieve-booking-response.js";

export type BulkRetrieveBookingsResponse = {
  bookings?: Record<string, RetrieveBookingResponse>;
  errors?: Error[];
};

export const bulkRetrieveBookingsResponseSchema: Schema<BulkRetrieveBookingsResponse> =
  s.object<BulkRetrieveBookingsResponse>({
    bookings: s.optional(
      s.record(
        s.string(),
        s.lazy(() => retrieveBookingResponseSchema),
      ),
    ),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
