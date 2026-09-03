import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyEventFilterSchema, type LoyaltyEventFilter } from "./loyalty-event-filter.js";

export type LoyaltyEventQuery = {
  filter?: LoyaltyEventFilter;
};

export const loyaltyEventQuerySchema: Schema<LoyaltyEventQuery> = s.object<LoyaltyEventQuery>({
  filter: s.optional(s.lazy(() => loyaltyEventFilterSchema)),
});
