import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disputeSchema, type Dispute } from "./dispute.js";

export type DisputeEvidenceRemovedEventObject = {
  object?: Dispute;
};

export const disputeEvidenceRemovedEventObjectSchema: Schema<DisputeEvidenceRemovedEventObject> =
  s.object<DisputeEvidenceRemovedEventObject>({
    object: s.optional(s.lazy(() => disputeSchema)),
  });
