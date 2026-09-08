import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyEventFilterSchema, type LoyaltyEventFilter } from "./loyalty-event-filter.js";

/** Represents a query used to search for loyalty events. */
export type LoyaltyEventQuery = {
  /**
   * The filtering criteria. If the request specifies multiple filters, the endpoint uses a logical
   * AND to evaluate them.
   */
  filter?: LoyaltyEventFilter;
};

export const loyaltyEventQuerySchema: Schema<LoyaltyEventQuery> = s.object<LoyaltyEventQuery>({
  filter: s.optional(s.lazy(() => loyaltyEventFilterSchema)),
});
