import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  refundCreatedEventObjectSchema,
  type RefundCreatedEventObject,
} from "./refund-created-event-object.js";

export type RefundCreatedEventData = {
  /** Name of the affected object’s type, `"refund"`. */
  type?: string | null;
  /** ID of the affected refund. */
  id?: string;
  object?: RefundCreatedEventObject;
};

export const refundCreatedEventDataSchema: Schema<RefundCreatedEventData> = s.object<RefundCreatedEventData>({
  type: s.optionalNullable(s.string()),
  id: s.optional(s.string()),
  object: s.optional(s.lazy(() => refundCreatedEventObjectSchema)),
});
