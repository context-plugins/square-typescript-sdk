import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerSegmentSchema, type CustomerSegment } from "./customer-segment.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Defines the fields that are included in the response body for requests to the
 * `RetrieveCustomerSegment` endpoint.
 *
 * Either `errors` or `segment` is present in a given response (never both).
 */
export type RetrieveCustomerSegmentResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * Represents a group of customer profiles that match one or more predefined filter criteria.
   *
   * Segments (also known as Smart Groups) are defined and created within the Customer Directory in
   * the Square Seller Dashboard or Point of Sale.
   */
  segment?: CustomerSegment;
};

export const retrieveCustomerSegmentResponseSchema: Schema<RetrieveCustomerSegmentResponse> =
  s.object<RetrieveCustomerSegmentResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    segment: s.optional(s.lazy(() => customerSegmentSchema)),
  });
