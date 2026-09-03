import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentUpdatedEventObjectSchema,
  type PaymentUpdatedEventObject,
} from "./payment-updated-event-object.js";

export type PaymentUpdatedEventData = {
  type?: string | null;
  id?: string;
  object?: PaymentUpdatedEventObject;
};

export const paymentUpdatedEventDataSchema: Schema<PaymentUpdatedEventData> =
  s.object<PaymentUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => paymentUpdatedEventObjectSchema)),
  });
