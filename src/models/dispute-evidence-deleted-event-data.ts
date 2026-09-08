import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  disputeEvidenceDeletedEventObjectSchema,
  type DisputeEvidenceDeletedEventObject,
} from "./dispute-evidence-deleted-event-object.js";

export type DisputeEvidenceDeletedEventData = {
  /** Name of the affected dispute's type. */
  type?: string | null;
  /** ID of the affected dispute. */
  id?: string;
  object?: DisputeEvidenceDeletedEventObject;
};

export const disputeEvidenceDeletedEventDataSchema: Schema<DisputeEvidenceDeletedEventData> =
  s.object<DisputeEvidenceDeletedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => disputeEvidenceDeletedEventObjectSchema)),
  });
