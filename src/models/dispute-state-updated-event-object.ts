import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disputeSchema, type Dispute } from "./dispute.js";

export type DisputeStateUpdatedEventObject = {
  object?: Dispute;
};

export const disputeStateUpdatedEventObjectSchema: Schema<DisputeStateUpdatedEventObject> =
  s.object<DisputeStateUpdatedEventObject>({
    object: s.optional(s.lazy(() => disputeSchema)),
  });
