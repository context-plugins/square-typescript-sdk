import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerSegmentSchema, type CustomerSegment } from "./customer-segment.js";
import { errorSchema, type Error } from "./error.js";

export type ListCustomerSegmentsResponse = {
  errors?: Error[];
  segments?: CustomerSegment[];
  cursor?: string;
};

export const listCustomerSegmentsResponseSchema: Schema<ListCustomerSegmentsResponse> =
  s.object<ListCustomerSegmentsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    segments: s.optional(s.array(s.lazy(() => customerSegmentSchema))),
    cursor: s.optional(s.string()),
  });
