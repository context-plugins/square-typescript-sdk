import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  refundUpdatedEventObjectSchema,
  type RefundUpdatedEventObject,
} from "./refund-updated-event-object.js";

export type RefundUpdatedEventData = {
  /** Name of the affected object’s type, `"refund"`. */
  type?: string | null;
  /** ID of the affected refund. */
  id?: string;
  object?: RefundUpdatedEventObject;
};

export const refundUpdatedEventDataSchema: Schema<RefundUpdatedEventData> = s.object<RefundUpdatedEventData>({
  type: s.optionalNullable(s.string()),
  id: s.optional(s.string()),
  object: s.optional(s.lazy(() => refundUpdatedEventObjectSchema)),
});
