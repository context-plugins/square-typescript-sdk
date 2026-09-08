import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  disputeEvidenceAddedEventObjectSchema,
  type DisputeEvidenceAddedEventObject,
} from "./dispute-evidence-added-event-object.js";

export type DisputeEvidenceAddedEventData = {
  /** Name of the affected dispute's type. */
  type?: string | null;
  /** ID of the affected dispute. */
  id?: string;
  object?: DisputeEvidenceAddedEventObject;
};

export const disputeEvidenceAddedEventDataSchema: Schema<DisputeEvidenceAddedEventData> =
  s.object<DisputeEvidenceAddedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => disputeEvidenceAddedEventObjectSchema)),
  });
