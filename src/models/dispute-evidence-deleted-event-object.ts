import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disputeSchema, type Dispute } from "./dispute.js";

export type DisputeEvidenceDeletedEventObject = {
  object?: Dispute;
};

export const disputeEvidenceDeletedEventObjectSchema: Schema<DisputeEvidenceDeletedEventObject> =
  s.object<DisputeEvidenceDeletedEventObject>({
    object: s.optional(s.lazy(() => disputeSchema)),
  });
