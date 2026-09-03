import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disputeSchema, type Dispute } from "./dispute.js";
import { errorSchema, type Error } from "./error.js";

export type SubmitEvidenceResponse = {
  errors?: Error[];
  dispute?: Dispute;
};

export const submitEvidenceResponseSchema: Schema<SubmitEvidenceResponse> = s.object<SubmitEvidenceResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  dispute: s.optional(s.lazy(() => disputeSchema)),
});
