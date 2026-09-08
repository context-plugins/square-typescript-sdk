import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  disputeEvidenceCreatedEventObjectSchema,
  type DisputeEvidenceCreatedEventObject,
} from "./dispute-evidence-created-event-object.js";

export type DisputeEvidenceCreatedEventData = {
  /** Name of the affected dispute's type. */
  type?: string | null;
  /** ID of the affected dispute. */
  id?: string;
  object?: DisputeEvidenceCreatedEventObject;
};

export const disputeEvidenceCreatedEventDataSchema: Schema<DisputeEvidenceCreatedEventData> =
  s.object<DisputeEvidenceCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => disputeEvidenceCreatedEventObjectSchema)),
  });
