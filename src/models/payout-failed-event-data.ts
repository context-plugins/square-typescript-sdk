import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payoutFailedEventObjectSchema, type PayoutFailedEventObject } from "./payout-failed-event-object.js";

export type PayoutFailedEventData = {
  type?: string | null;
  id?: string;
  object?: PayoutFailedEventObject;
};

export const payoutFailedEventDataSchema: Schema<PayoutFailedEventData> = s.object<PayoutFailedEventData>({
  type: s.optionalNullable(s.string()),
  id: s.optional(s.string()),
  object: s.optional(s.lazy(() => payoutFailedEventObjectSchema)),
});
