import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyEventQuerySchema, type LoyaltyEventQuery } from "./loyalty-event-query.js";

export type SearchLoyaltyEventsRequest = {
  query?: LoyaltyEventQuery;
  limit?: number;
  cursor?: string;
};

export const searchLoyaltyEventsRequestSchema: Schema<SearchLoyaltyEventsRequest> =
  s.object<SearchLoyaltyEventsRequest>({
    query: s.optional(s.lazy(() => loyaltyEventQuerySchema)),
    limit: s.optional(s.number()),
    cursor: s.optional(s.string()),
  });
