import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disputeEvidenceSchema, type DisputeEvidence } from "./dispute-evidence.js";
import { errorSchema, type Error } from "./error.js";

/** Defines the fields in a `ListDisputeEvidence` response. */
export type ListDisputeEvidenceResponse = {
  /** The list of evidence previously uploaded to the specified dispute. */
  evidence?: DisputeEvidence[];
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /**
   * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
   * For more information, see
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
};

export const listDisputeEvidenceResponseSchema: Schema<ListDisputeEvidenceResponse> =
  s.object<ListDisputeEvidenceResponse>({
    evidence: s.optional(s.array(s.lazy(() => disputeEvidenceSchema))),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    cursor: s.optional(s.string()),
  });
