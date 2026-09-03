import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disputeSchema, type Dispute } from "./dispute.js";

export type DisputeStateChangedEventObject = {
  object?: Dispute;
};

export const disputeStateChangedEventObjectSchema: Schema<DisputeStateChangedEventObject> =
  s.object<DisputeStateChangedEventObject>({
    object: s.optional(s.lazy(() => disputeSchema)),
  });
