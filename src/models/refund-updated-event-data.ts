import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  refundUpdatedEventObjectSchema,
  type RefundUpdatedEventObject,
} from "./refund-updated-event-object.js";

export type RefundUpdatedEventData = {
  type?: string | null;
  id?: string;
  object?: RefundUpdatedEventObject;
};

export const refundUpdatedEventDataSchema: Schema<RefundUpdatedEventData> = s.object<RefundUpdatedEventData>({
  type: s.optionalNullable(s.string()),
  id: s.optional(s.string()),
  object: s.optional(s.lazy(() => refundUpdatedEventObjectSchema)),
});
