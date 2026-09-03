import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  disputeEvidenceCreatedEventObjectSchema,
  type DisputeEvidenceCreatedEventObject,
} from "./dispute-evidence-created-event-object.js";

export type DisputeEvidenceCreatedEventData = {
  type?: string | null;
  id?: string;
  object?: DisputeEvidenceCreatedEventObject;
};

export const disputeEvidenceCreatedEventDataSchema: Schema<DisputeEvidenceCreatedEventData> =
  s.object<DisputeEvidenceCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => disputeEvidenceCreatedEventObjectSchema)),
  });
