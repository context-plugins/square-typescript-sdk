import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  disputeEvidenceRemovedEventObjectSchema,
  type DisputeEvidenceRemovedEventObject,
} from "./dispute-evidence-removed-event-object.js";

export type DisputeEvidenceRemovedEventData = {
  type?: string | null;
  id?: string;
  object?: DisputeEvidenceRemovedEventObject;
};

export const disputeEvidenceRemovedEventDataSchema: Schema<DisputeEvidenceRemovedEventData> =
  s.object<DisputeEvidenceRemovedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => disputeEvidenceRemovedEventObjectSchema)),
  });
