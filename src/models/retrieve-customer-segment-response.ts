import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerSegmentSchema, type CustomerSegment } from "./customer-segment.js";
import { errorSchema, type Error } from "./error.js";

export type RetrieveCustomerSegmentResponse = {
  errors?: Error[];
  segment?: CustomerSegment;
};

export const retrieveCustomerSegmentResponseSchema: Schema<RetrieveCustomerSegmentResponse> =
  s.object<RetrieveCustomerSegmentResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    segment: s.optional(s.lazy(() => customerSegmentSchema)),
  });
