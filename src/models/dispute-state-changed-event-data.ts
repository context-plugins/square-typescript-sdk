import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  disputeStateChangedEventObjectSchema,
  type DisputeStateChangedEventObject,
} from "./dispute-state-changed-event-object.js";

export type DisputeStateChangedEventData = {
  /** Name of the affected dispute's type. */
  type?: string | null;
  /** ID of the affected dispute. */
  id?: string;
  object?: DisputeStateChangedEventObject;
};

export const disputeStateChangedEventDataSchema: Schema<DisputeStateChangedEventData> =
  s.object<DisputeStateChangedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => disputeStateChangedEventObjectSchema)),
  });
