import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferOrderUpdatedEventObjectSchema,
  type TransferOrderUpdatedEventObject,
} from "./transfer-order-updated-event-object.js";

export type TransferOrderUpdatedEventData = {
  /** Name of the affected object’s type, `"transfer_order"`. */
  type?: string | null;
  /** ID of the affected transfer_order. */
  id?: string;
  object?: TransferOrderUpdatedEventObject;
};

export const transferOrderUpdatedEventDataSchema: Schema<TransferOrderUpdatedEventData> =
  s.object<TransferOrderUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => transferOrderUpdatedEventObjectSchema)),
  });
