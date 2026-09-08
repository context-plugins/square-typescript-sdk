import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerSegmentSchema, type CustomerSegment } from "./customer-segment.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Defines the fields that are included in the response body for requests to the
 * `ListCustomerSegments` endpoint.
 *
 * Either `errors` or `segments` is present in a given response (never both).
 */
export type ListCustomerSegmentsResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The list of customer segments belonging to the associated Square account. */
  segments?: CustomerSegment[];
  /**
   * A pagination cursor to be used in subsequent calls to `ListCustomerSegments` to retrieve the
   * next set of query results. The cursor is only present if the request succeeded and additional
   * results are available.
   *
   * For more information, see
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
};

export const listCustomerSegmentsResponseSchema: Schema<ListCustomerSegmentsResponse> =
  s.object<ListCustomerSegmentsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    segments: s.optional(s.array(s.lazy(() => customerSegmentSchema))),
    cursor: s.optional(s.string()),
  });
