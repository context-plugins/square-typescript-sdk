import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disputeSchema, type Dispute } from "./dispute.js";

export type DisputeEvidenceCreatedEventObject = {
  object?: Dispute;
};

export const disputeEvidenceCreatedEventObjectSchema: Schema<DisputeEvidenceCreatedEventObject> =
  s.object<DisputeEvidenceCreatedEventObject>({
    object: s.optional(s.lazy(() => disputeSchema)),
  });
