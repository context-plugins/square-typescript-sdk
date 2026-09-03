import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disputeEvidenceSchema, type DisputeEvidence } from "./dispute-evidence.js";
import { errorSchema, type Error } from "./error.js";

export type ListDisputeEvidenceResponse = {
  evidence?: DisputeEvidence[];
  errors?: Error[];
  cursor?: string;
};

export const listDisputeEvidenceResponseSchema: Schema<ListDisputeEvidenceResponse> =
  s.object<ListDisputeEvidenceResponse>({
    evidence: s.optional(s.array(s.lazy(() => disputeEvidenceSchema))),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    cursor: s.optional(s.string()),
  });
