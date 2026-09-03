import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  disputeEvidenceAddedEventObjectSchema,
  type DisputeEvidenceAddedEventObject,
} from "./dispute-evidence-added-event-object.js";

export type DisputeEvidenceAddedEventData = {
  type?: string | null;
  id?: string;
  object?: DisputeEvidenceAddedEventObject;
};

export const disputeEvidenceAddedEventDataSchema: Schema<DisputeEvidenceAddedEventData> =
  s.object<DisputeEvidenceAddedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => disputeEvidenceAddedEventObjectSchema)),
  });
