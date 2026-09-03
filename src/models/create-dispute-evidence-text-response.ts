import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disputeEvidenceSchema, type DisputeEvidence } from "./dispute-evidence.js";
import { errorSchema, type Error } from "./error.js";

export type CreateDisputeEvidenceTextResponse = {
  errors?: Error[];
  evidence?: DisputeEvidence;
};

export const createDisputeEvidenceTextResponseSchema: Schema<CreateDisputeEvidenceTextResponse> =
  s.object<CreateDisputeEvidenceTextResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    evidence: s.optional(s.lazy(() => disputeEvidenceSchema)),
  });
