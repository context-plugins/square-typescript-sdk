import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  disputeCreatedEventObjectSchema,
  type DisputeCreatedEventObject,
} from "./dispute-created-event-object.js";

export type DisputeCreatedEventData = {
  type?: string | null;
  id?: string;
  object?: DisputeCreatedEventObject;
};

export const disputeCreatedEventDataSchema: Schema<DisputeCreatedEventData> =
  s.object<DisputeCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => disputeCreatedEventObjectSchema)),
  });
