import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payoutPaidEventObjectSchema, type PayoutPaidEventObject } from "./payout-paid-event-object.js";

export type PayoutPaidEventData = {
  type?: string | null;
  id?: string;
  object?: PayoutPaidEventObject;
};

export const payoutPaidEventDataSchema: Schema<PayoutPaidEventData> = s.object<PayoutPaidEventData>({
  type: s.optionalNullable(s.string()),
  id: s.optional(s.string()),
  object: s.optional(s.lazy(() => payoutPaidEventObjectSchema)),
});
