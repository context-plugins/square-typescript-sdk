import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentCreatedEventObjectSchema,
  type PaymentCreatedEventObject,
} from "./payment-created-event-object.js";

export type PaymentCreatedEventData = {
  /** Name of the affected object’s type, `"payment"`. */
  type?: string | null;
  /** ID of the affected payment. */
  id?: string;
  object?: PaymentCreatedEventObject;
};

export const paymentCreatedEventDataSchema: Schema<PaymentCreatedEventData> =
  s.object<PaymentCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => paymentCreatedEventObjectSchema)),
  });
