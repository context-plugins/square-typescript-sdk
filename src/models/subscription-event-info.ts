import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionEventInfoCodeSchema,
  type SubscriptionEventInfoCode,
} from "./subscription-event-info-code.js";

export type SubscriptionEventInfo = {
  detail?: string | null;
  code?: SubscriptionEventInfoCode;
};

export const subscriptionEventInfoSchema: Schema<SubscriptionEventInfo> = s.object<SubscriptionEventInfo>({
  detail: s.optionalNullable(s.string()),
  code: s.optional(s.lazy(() => subscriptionEventInfoCodeSchema)),
});
