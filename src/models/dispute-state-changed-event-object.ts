import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disputeSchema, type Dispute } from "./dispute.js";

export type DisputeStateChangedEventObject = {
  /**
   * Represents a [dispute](https://developer.squareup.com/docs/disputes-api/overview) a cardholder
   * initiated with their bank.
   */
  object?: Dispute;
};

export const disputeStateChangedEventObjectSchema: Schema<DisputeStateChangedEventObject> =
  s.object<DisputeStateChangedEventObject>({
    object: s.optional(s.lazy(() => disputeSchema)),
  });
