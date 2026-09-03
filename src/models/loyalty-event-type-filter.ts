import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyEventTypeSchema, type LoyaltyEventType } from "./loyalty-event-type.js";

export type LoyaltyEventTypeFilter = {
  types: LoyaltyEventType[];
};

export const loyaltyEventTypeFilterSchema: Schema<LoyaltyEventTypeFilter> = s.object<LoyaltyEventTypeFilter>({
  types: s.array(s.lazy(() => loyaltyEventTypeSchema)),
});
