import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payoutSentEventObjectSchema, type PayoutSentEventObject } from "./payout-sent-event-object.js";

export type PayoutSentEventData = {
  /** Name of the affected object’s type, `"payout"`. */
  type?: string | null;
  /** ID of the sent payout. */
  id?: string;
  object?: PayoutSentEventObject;
};

export const payoutSentEventDataSchema: Schema<PayoutSentEventData> = s.object<PayoutSentEventData>({
  type: s.optionalNullable(s.string()),
  id: s.optional(s.string()),
  object: s.optional(s.lazy(() => payoutSentEventObjectSchema)),
});
