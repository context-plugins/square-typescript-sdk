import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disputeSchema, type Dispute } from "./dispute.js";
import { errorSchema, type Error } from "./error.js";

/** Defines the fields in an `AcceptDispute` response. */
export type AcceptDisputeResponse = {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /**
   * Represents a [dispute](https://developer.squareup.com/docs/disputes-api/overview) a cardholder
   * initiated with their bank.
   */
  dispute?: Dispute;
};

export const acceptDisputeResponseSchema: Schema<AcceptDisputeResponse> = s.object<AcceptDisputeResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  dispute: s.optional(s.lazy(() => disputeSchema)),
});
