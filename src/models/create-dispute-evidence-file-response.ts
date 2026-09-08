import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disputeEvidenceSchema, type DisputeEvidence } from "./dispute-evidence.js";
import { errorSchema, type Error } from "./error.js";

/** Defines the fields in a `CreateDisputeEvidenceFile` response. */
export type CreateDisputeEvidenceFileResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  evidence?: DisputeEvidence;
};

export const createDisputeEvidenceFileResponseSchema: Schema<CreateDisputeEvidenceFileResponse> =
  s.object<CreateDisputeEvidenceFileResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    evidence: s.optional(s.lazy(() => disputeEvidenceSchema)),
  });
