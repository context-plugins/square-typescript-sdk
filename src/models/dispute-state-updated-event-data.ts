import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  disputeStateUpdatedEventObjectSchema,
  type DisputeStateUpdatedEventObject,
} from "./dispute-state-updated-event-object.js";

export type DisputeStateUpdatedEventData = {
  /** Name of the affected dispute's type. */
  type?: string | null;
  /** ID of the affected dispute. */
  id?: string;
  object?: DisputeStateUpdatedEventObject;
};

export const disputeStateUpdatedEventDataSchema: Schema<DisputeStateUpdatedEventData> =
  s.object<DisputeStateUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => disputeStateUpdatedEventObjectSchema)),
  });
