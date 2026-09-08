import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disputeSchema, type Dispute } from "./dispute.js";

export type DisputeEvidenceRemovedEventObject = {
  /**
   * Represents a [dispute](https://developer.squareup.com/docs/disputes-api/overview) a cardholder
   * initiated with their bank.
   */
  object?: Dispute;
};

export const disputeEvidenceRemovedEventObjectSchema: Schema<DisputeEvidenceRemovedEventObject> =
  s.object<DisputeEvidenceRemovedEventObject>({
    object: s.optional(s.lazy(() => disputeSchema)),
  });
