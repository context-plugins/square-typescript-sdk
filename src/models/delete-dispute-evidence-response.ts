import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/** Defines the fields in a `DeleteDisputeEvidence` response. */
export type DeleteDisputeEvidenceResponse = {
  /** Information about errors encountered during the request. */
  errors?: Error[];
};

export const deleteDisputeEvidenceResponseSchema: Schema<DeleteDisputeEvidenceResponse> =
  s.object<DeleteDisputeEvidenceResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
