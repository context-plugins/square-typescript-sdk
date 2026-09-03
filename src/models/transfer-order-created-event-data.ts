import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferOrderCreatedEventObjectSchema,
  type TransferOrderCreatedEventObject,
} from "./transfer-order-created-event-object.js";

export type TransferOrderCreatedEventData = {
  type?: string | null;
  id?: string;
  object?: TransferOrderCreatedEventObject;
};

export const transferOrderCreatedEventDataSchema: Schema<TransferOrderCreatedEventData> =
  s.object<TransferOrderCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => transferOrderCreatedEventObjectSchema)),
  });
