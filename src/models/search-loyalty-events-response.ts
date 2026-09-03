import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { loyaltyEventSchema, type LoyaltyEvent } from "./loyalty-event.js";

export type SearchLoyaltyEventsResponse = {
  errors?: Error[];
  events?: LoyaltyEvent[];
  cursor?: string;
};

export const searchLoyaltyEventsResponseSchema: Schema<SearchLoyaltyEventsResponse> =
  s.object<SearchLoyaltyEventsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    events: s.optional(s.array(s.lazy(() => loyaltyEventSchema))),
    cursor: s.optional(s.string()),
  });
