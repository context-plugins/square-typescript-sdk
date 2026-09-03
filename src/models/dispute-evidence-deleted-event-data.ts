import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  disputeEvidenceDeletedEventObjectSchema,
  type DisputeEvidenceDeletedEventObject,
} from "./dispute-evidence-deleted-event-object.js";

export type DisputeEvidenceDeletedEventData = {
  type?: string | null;
  id?: string;
  object?: DisputeEvidenceDeletedEventObject;
};

export const disputeEvidenceDeletedEventDataSchema: Schema<DisputeEvidenceDeletedEventData> =
  s.object<DisputeEvidenceDeletedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => disputeEvidenceDeletedEventObjectSchema)),
  });
