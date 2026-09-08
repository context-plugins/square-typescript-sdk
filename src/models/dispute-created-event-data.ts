import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  disputeCreatedEventObjectSchema,
  type DisputeCreatedEventObject,
} from "./dispute-created-event-object.js";

export type DisputeCreatedEventData = {
  /** Name of the affected dispute's type. */
  type?: string | null;
  /** ID of the affected dispute. */
  id?: string;
  object?: DisputeCreatedEventObject;
};

export const disputeCreatedEventDataSchema: Schema<DisputeCreatedEventData> =
  s.object<DisputeCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => disputeCreatedEventObjectSchema)),
  });
